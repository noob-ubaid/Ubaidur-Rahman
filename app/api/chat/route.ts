// import { knowledgeBase } from "@/app/web/data/knowledge";
// import { openai } from "@ai-sdk/openai";
// import { streamText, convertToModelMessages } from "ai";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     // Parse request body
//     const body = await req.json();
//     const { messages } = body;

//     // Validate messages
//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: "Invalid request format" },
//         { status: 400 },
//       );
//     }

//     // Convert UI messages to model messages using AI SDK utility
//     const modelMessages =await convertToModelMessages(messages);

//     // Check if we have any valid messages
//     if ((await modelMessages).length === 0) {
//       return NextResponse.json(
//         { error: "No valid messages provided" },
//         { status: 400 },
//       );
//     }

//     // Add system prompt to prevent hallucination and guide the model
//     const systemPrompt = {
//       role: "system" as const,
//       content: `
// You are Ubaidur Rahman's AI portfolio assistant.

// RULES:
// - Answer ONLY using the information below.
// - If the answer is not present, say: "I don't have that information."
// - Be friendly, short, and professional.

// DATA:
// ${knowledgeBase}
// `,
//     };

//     // Prepend system message if not already present
//     const hasSystemMessage = (await modelMessages).some(
//       (msg) => msg.role === "system",
//     );
//     if (!hasSystemMessage) {
//       (await modelMessages).unshift(systemPrompt);
//     }

//     // Call OpenAI with streaming using the new AI SDK
//     const result = streamText({
//      model: openai("gpt-4.1-mini"),
//       messages: modelMessages,
//       temperature: 0.1, // Lower temperature for more deterministic, factual responses
//     });

//     // Log stream start
//     console.log(`Stream started`);

//     // Return UI message stream response for useChat compatibility
//     return result.toUIMessageStreamResponse({
//       headers: {
//         "Cache-Control": "no-cache, no-transform",
//         "X-Accel-Buffering": "no",
//       },
//     });
//   } catch (error: unknown) {
//     console.error("Chat API Error:", error);

//     // Handle specific errors
//     if (error && typeof error === "object" && "status" in error) {
//       const errorWithStatus = error as { status: number };

//       if (errorWithStatus.status === 401) {
//         return NextResponse.json(
//           {
//             error: "Authentication failed. Check API key configuration.",
//           },
//           { status: 401 },
//         );
//       }

//       if (errorWithStatus.status === 404) {
//         return NextResponse.json(
//           {
//             error: "Model not found. Check your fine-tuned model ID.",
//           },
//           { status: 404 },
//         );
//       }

//       if (errorWithStatus.status === 429) {
//         return NextResponse.json(
//           {
//             error: "OpenAI rate limit reached. Please try again later.",
//           },
//           { status: 429 },
//         );
//       }
//     }

//     // Generic error
//     return NextResponse.json(
//       { error: "An error occurred. Please try again." },
//       { status: 500 },
//     );
//   }
// }







import { knowledgeBase } from "@/app/web/data/knowledge";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid request format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const apiKey =
      process.env.GEMINI_API_KEY ?? process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error:
            "No Gemini API key configured. Set GEMINI_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const google = createGoogleGenerativeAI({ apiKey });

    const result = streamText({
      model: google("gemini-2.5-flash"),
      system: `
You are Ubaidur Rahman's AI portfolio assistant.

RULES:
- Answer ONLY using the information below.
- If the answer is not present, say: "I don't have that information."
- Be friendly, short, and professional.

DATA:
${knowledgeBase}
      `.trim(),
      messages: await convertToModelMessages(messages),
      temperature: 0.2,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);

    return new Response(
      JSON.stringify({
        error: "An error occurred while generating a response. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

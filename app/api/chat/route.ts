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
      model: google("gemini-2.5-flash-lite"),
      // model: google("gemini-2.5-flash"),
      system: `
You are Ubaidur Rahman's AI portfolio assistant.

RULES:
- Answer ONLY using the information below.
- If the answer is not present, say: "I don't have that information."
- Be friendly, long, and professional.

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

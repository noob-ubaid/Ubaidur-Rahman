import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Footer from "./components/Footer/Footer";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Ubaidur Rahman",
  description: "Portfolio of Md. Ubaidur Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${hankenGrotesk.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-[720px] mx-auto px-4  sm:px-0">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

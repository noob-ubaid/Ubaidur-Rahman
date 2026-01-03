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
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-p-20 scroll-smooth"
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${hankenGrotesk.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="grow max-w-[720px] w-full mt-14 mx-auto px-4 sm:px-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

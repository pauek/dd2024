import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ForkMe from "@/components/ForkMe";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DD204 - Web Dev Workshop",
  description: "Web Development Workshop at Data Days 2024, UPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ForkMe href="https://github.com/pauek/dd2024" />
        {children}
      </body>
    </html>
  );
}

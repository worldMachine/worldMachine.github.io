import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SEO from "@/components/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KBD",
  description: "K. Brady Davis, Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SEO />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

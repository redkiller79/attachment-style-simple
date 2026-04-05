import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Attachment Style Assessment - Discover Your Relationship Patterns",
  description: "Take our scientifically-validated 20-question assessment to discover your attachment style. Learn how you form relationships and improve your connections.",
  keywords: "attachment style test, relationship assessment, emotional connection, psychology test, self-discovery",
  openGraph: {
    title: "Attachment Style Assessment",
    description: "Discover your attachment style with our research-based assessment.",
    type: "website",
  },
  alternates: {
    canonical: "https://bondtype.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

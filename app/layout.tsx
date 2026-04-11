import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Attachment Style Assessment - Discover Your Relationship Patterns",
  description: "Take our scientifically-validated 15-question assessment to discover your attachment style. Learn how you form relationships and improve your connections.",
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
    <html lang="en" className="h-full antialiased dark">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PKDLKQ5SE9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PKDLKQ5SE9');
            `,
          }}
        ></script>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "BondType Attachment Style Assessment",
            "description": "Take our scientifically-validated 15-question assessment to discover your attachment style and understand how you form relationships.",
            "url": "https://bondtype.com",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            }
          })}
        </script>
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

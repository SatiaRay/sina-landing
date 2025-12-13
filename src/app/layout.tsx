import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://sina.ai"),
  title: "Sina | هوش مصنوعی سینا",
  description: "سینا AI — پلتفرم ساخت دستیارهای هوشمند برای کسب‌وکارها",
  openGraph: {
    title: "Sina | هوش مصنوعی سینا",
    description: "سینا AI — پلتفرم ساخت دستیارهای هوشمند برای کسب‌وکارها",
    url: "https://sina.ai",
    siteName: "Sina AI",
    images: [
      {
        url: "/assets/img/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sina | هوش مصنوعی سینا",
    description: "سینا AI — پلتفرم ساخت دستیارهای هوشمند برای کسب‌وکارها",
    images: ["/assets/img/og-image.png"],
  },
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />

        <link rel="canonical" href="https://sina.ai" />
      </head>
      <body>
        {children}

        <Script
          src="/assets/js/vendors/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/vendors/bootstrap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/vendors/owl.carousel.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/vendors/jquery.easing.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/js/vendors/magnific-popup.min.js"
          strategy="lazyOnload"
        />

        <Script src="/assets/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

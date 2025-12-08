import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sina AI | هوش مصنوعی سینا",
  description: "Sina AI Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        {children}

        <Script
          src="/assets/js/vendors/jquery-3.5.1.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/vendors/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendors/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendors/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendors/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

import Head from 'next/head';
import Script from 'next/script';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DarkModeToggle from "@/components/DarkModeToggle";
import ChatBotToggle from "@/components/ChatBotToggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TDBMQ7378B"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TDBMQ7378B');
        `}
      </Script>



      <Head>
        <title>Doxali | AI Powered Document Intelligence</title>
        <meta
          name="description"
          content="Doxali is an AI-powered platform for intelligent document analysis, data extraction, and workflow automation — built for legal, financial, business, and enterprise use cases."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Doxali | AI Powered Document Intelligence" />
        <meta
          property="og:description"
          content="Doxali is an AI-powered platform for intelligent document analysis, data extraction, and workflow automation — built for legal, financial, business, and enterprise use cases."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://doxali.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doxali | AI Powered Document Intelligence" />
        <meta
          name="twitter:description"
          content="Doxali is an AI-powered platform for intelligent document analysis, data extraction, and workflow automation — built for legal, financial, business, and enterprise use cases."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Component {...pageProps} />
      <DarkModeToggle />
      <ChatBotToggle />
    </>
  );
}

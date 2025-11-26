/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Lucas Santos",
  description:
    "Portfolio desenvolvedor fullstack. Confira meus projetos, certificações e entre em contato.",
  keywords: [
    "desenvolvedor",
    "fullstack",
    "react",
    "next.js",
    "web development",
    "portfolio",
    "javascript",
    "typescript",
    "node.js",
    "css",
    "html",
    "programação",
    "projetos",
    "certificações",
    "contato",
    "lucas santos",
    "desenvolvimento web",
    "frontend",
    "backend",
    "tecnologia",
  ],
  authors: [{ name: "Lucas Santos" }],
  creator: "Lucas Santos",
  publisher: "Lucas Santos",
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      {
        url: "/icon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-16x16.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url:
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://lucassantos-portfolio.vercel.app",
    siteName: "Portfolio",
    title: "Portfolio | Desenvolvedor Fullstack",
    description: "Lucas Santos - Desenvolvedor Fullstack",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://lucassantos-portfolio.vercel.app"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Desenvolvedor Fullstack",
    description: "Lucas Santos - Desenvolvedor Fullstack",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://lucassantos-portfolio.vercel.app"}/og-image.png`,
    ],
  },
  verification: {
    google: "8SUW8SYi1EO5OXBJoIBiy9KP6P0WafV5tVAtpqsgqFY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0a0e1a",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="canonical"
          href={
            process.env.NEXT_PUBLIC_BASE_URL ||
            "https://lucassantos-portfolio.vercel.app/"
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          property="og:url"
          content="https://lucassantos-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Portfolio | Desenvolvedor Fullstack"
        />
        <meta
          property="og:description"
          content="Portfolio desenvolvedor fullstack. Confira meus projetos, certificações e entre em contato."
        />
        <meta
          property="og:image"
          content="https://lucassantos-portfolio.vercel.app/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lucas Santos",
              url:
                process.env.NEXT_PUBLIC_BASE_URL ||
                "https://lucassantos-portfolio.vercel.app/",
              jobTitle: "Desenvolvedor Fullstack",
              sameAs: [
                "https://github.com/lucasssantos94",
                "https://linkedin.com/in/lucas-silva-santos-439815a2/",
              ],
              image: `${process.env.NEXT_PUBLIC_BASE_URL || "https://lucassantos-portfolio.vercel.app/"}/avatar.jpg`,
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 relative z-10 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

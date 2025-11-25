/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Desenvolvedor Fullstack",
  description:
    "Portfolio profissional de desenvolvedor fullstack. Confira meus projetos, certificações e entre em contato.",
  keywords: [
    "desenvolvedor",
    "fullstack",
    "react",
    "next.js",
    "web development",
  ],
  authors: [{ name: "Seu Nome" }],
  creator: "Seu Nome",
  publisher: "Seu Nome",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com",
    siteName: "Portfolio",
    title: "Portfolio | Desenvolvedor Fullstack",
    description: "Portfolio profissional de desenvolvedor fullstack",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com"}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Desenvolvedor Fullstack",
    description: "Portfolio profissional de desenvolvedor fullstack",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com"}/og-image.jpg`,
    ],
  },
  verification: {
    google: "google-site-verification-code", // Replace with your code
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
          href={process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Seu Nome",
              url:
                process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com",
              jobTitle: "Desenvolvedor Fullstack",
              sameAs: [
                "https://github.com/seu-usuario",
                "https://linkedin.com/in/seu-usuario",
              ],
              image: `${process.env.NEXT_PUBLIC_BASE_URL || "https://seu-portfolio.com"}/avatar.jpg`,
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

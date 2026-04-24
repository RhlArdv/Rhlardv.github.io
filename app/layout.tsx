import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rahul Ardiva Luthfi | Software Engineer",
    template: "%s | Rahul Ardiva Luthfi"
  },
  description: "Software Engineer specializing in full-stack web development. Junior Software Engineer at Dinas Komunikasi dan Informatika, West Sumatra. Building scalable applications with Next.js and Laravel.",
  keywords: ["software engineer", "full-stack developer", "next.js", "laravel", "typescript", "react", "indonesia", "web developer"],
  authors: [{ name: "Rahul Ardiva Luthfi" }],
  creator: "Rahul Ardiva Luthfi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rhlardv.github.io",
    siteName: "Rahul Ardiva Luthfi Portfolio",
    title: "Rahul Ardiva Luthfi | Software Engineer",
    description: "Software Engineer specializing in full-stack web development. Junior Software Engineer at Dinas Komunikasi dan Informatika, West Sumatra.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Ardiva Luthfi - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Ardiva Luthfi | Software Engineer",
    description: "Software Engineer specializing in full-stack web development. Junior Software Engineer at Dinas Komunikasi dan Informatika, West Sumatra.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://cdn.simpleicons.org" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github-contributions-api.jogruber.de" crossOrigin="anonymous" />

        {/* DNS prefetch for non-critical resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
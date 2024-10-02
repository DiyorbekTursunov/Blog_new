<<<<<<< HEAD
import clsx from "clsx"
import type {Metadata} from "next"
import localFont from "next/font/local"
import "swiper/css"
import "@/app/globals.css"

import {RootLayout} from "layouts/RootLayout"

import "styles/index.scss"

const aventa = localFont({
    src: [
        {
            path: "../../public/fonts/Aventa/Aventa-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Aventa/Aventa-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Aventa/Aventa-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--var-aventa",
})

const fonts = [aventa]

export const metadata: Metadata = {
    title: "FXIFY",
    description: "FXIFY",
    icons: {
        icon: {
            url: "/favicon.ico",
            href: "/favicon.ico",
        },
        apple: {
            url: "/favicon.ico",
            href: "/favicon.ico",
        },
    },
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={clsx(fonts.map((font) => font.variable))}>
                <RootLayout>{children}</RootLayout>
            </body>
        </html>
    )
}
=======
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for better SEO
export const metadata: Metadata = {
  title: "Your Blog Title - A Place for Insights and Ideas",
  description: "Explore insightful articles on various topics, from technology to lifestyle, curated for curious minds.",
  keywords: "blog, technology, lifestyle, insights, articles, personal growth",
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Your Blog Title",
    description: "Explore insightful articles on various topics.",
    url: "https://yourwebsite.com",
    siteName: "Your Blog Name",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A description of the image for SEO",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Blog Title",
    description: "Explore insightful articles on various topics.",
    images: ["https://yourwebsite.com/images/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Example image with alt attribute for SEO */}
      </body>
    </html>
  );
}
>>>>>>> origin/main

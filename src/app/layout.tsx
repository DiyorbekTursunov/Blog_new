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

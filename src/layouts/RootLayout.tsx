"use client"

import dynamic from "next/dynamic"
import {FC, PropsWithChildren} from "react"

import {WithGsap} from "providers/WithGsap"
import {WithMain} from "providers/main-provider"

import {Footer} from "widgets/footer"
import {Header} from "widgets/header"

import {LenisLayout} from "./LenisLayout"
import {ScrollLayout} from "./ScrollLayout/ScrollLayout"

// const ScrollLayout = dynamic(
//     import("./ScrollLayout/ScrollLayout").then((mod) => mod.ScrollLayout),
//     {ssr: false},
// )

interface IRootLayout {}

export const RootLayout: FC<PropsWithChildren<IRootLayout>> = ({children}) => {
    return (
        // <LenisLayout>
        <ScrollLayout>
            <WithMain>
                <WithGsap>
                    <Header />
                    {children}
                    <Footer />
                </WithGsap>
            </WithMain>
        </ScrollLayout>
        // </LenisLayout>
    )
}

"use client"

import clsx from "clsx"
import {FC, useState} from "react"

import {BorderGradientLight} from "shared/components/border-gradient-light"

import {IconLogo} from "../icon-logo"

import styles from "./index.module.scss"

export interface ICard {
    type: "info" | "card"
    active?: boolean
    title?: string
    list: (string | boolean)[]
}

export const Card: FC<ICard> = ({active, type, title, list}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    return (
        <div
            className={clsx(styles.Card, styles[type])}
            onMouseEnter={() => {
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
            }}
        >
            {active && (
                <div className={clsx(styles.Card_bg)}>
                    <div className={clsx(styles.Card_bg_border)}>
                        <BorderGradientLight isActive={isHover} />
                    </div>
                    <div className={clsx(styles.Card_bg_logo)}>
                        <IconLogo />
                    </div>
                </div>
            )}
            <div className={clsx(styles.Card_header)}>
                {title && (
                    <div className={clsx(styles.Card_title)}>{title}</div>
                )}
            </div>
            <div className={clsx(styles.Card_list)}>
                {list.map((e, i) => (
                    <div className={clsx(styles.Card_list_item)}>
                        {type == "info" && "•"}{" "}
                        {typeof e === "string" ? e : "boolean"}
                    </div>
                ))}
            </div>
        </div>
    )
}

"use client"

import clsx from "clsx"
import Image from "next/image"
import {FC, useState} from "react"

import {BorderGradientLight} from "shared/components/border-gradient-light"

import styles from "./index.module.scss"

export interface ICardData {
    label: {
        text: string
        Icon: FC
    }
    title: string
    text: string
    bg: string
}

export interface ICard extends ICardData {
    num: number
}

export const Card: FC<ICard> = ({label, title, text, num, bg}) => {
    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div
            className={clsx(styles.Card)}
            onMouseEnter={() => {
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
            }}
        >
            <div className={clsx(styles.Card_bg)}>
                <Image
                    src={bg}
                    width={1000}
                    height={1000}
                    quality={100}
                    alt="card-bg"
                />
            </div>
            <div className={clsx(styles.Card_border)}>
                <BorderGradientLight isActive={isHover} />
            </div>
            <div className={clsx(styles.Card_num)}>0.{num}</div>
            <div className={clsx(styles.Card_label)}>
                <label.Icon /> {label.text}
            </div>
            <div className={clsx(styles.Card_title)}>{title}</div>
            <div className={clsx(styles.Card_text)}>{text}</div>
        </div>
    )
}

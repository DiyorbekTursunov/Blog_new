import clsx from "clsx"
import Image from "next/image"
import {FC, ReactNode} from "react"

import styles from "./index.module.scss"

export interface ICard {
    bg: string
    title: string
    text: string
    action: ReactNode
}

export const Card: FC<ICard> = ({bg, title, text, action}) => {
    return (
        <div className={clsx(styles.Card)}>
            <div className={clsx(styles.Card_bg)}>
                <Image
                    src={bg}
                    width={500}
                    height={500}
                    quality={100}
                    alt="card-bg"
                />
            </div>
            <div className={clsx(styles.Card_title)}>{title}</div>
            <div className={clsx(styles.Card_text)}>{text}</div>
            <div className={clsx(styles.Card_action)}>{action}</div>
        </div>
    )
}

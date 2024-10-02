import clsx from "clsx"
import {FC} from "react"

import {Elements} from "shared/elements"

import styles from "./index.module.scss"

export interface ICard {
    text: string
    author: string
    size?: "small" | "big"
}

interface ICardProps extends ICard {
    index: number
}

export const Card: FC<ICardProps> = ({text, author, size = "small", index}) => {
    return (
        <div
            className={clsx(
                styles.Card,
                styles[size],
                styles[`Card_${index + 1}`],
            )}
        >
            <div className={clsx(styles.Card_text)}>{text}</div>
            <div className={clsx(styles.Card_bottom)}>
                <div className={clsx(styles.Card_author)}>{author}</div>
                <div className={clsx(styles.Card_stars)}>
                    <Elements.Stars />
                </div>
            </div>
        </div>
    )
}

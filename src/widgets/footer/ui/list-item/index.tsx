import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

export interface IListItem {
    title: string
    text: string
}

export const ListItem: FC<IListItem> = ({title, text}) => {
    return (
        <div className={clsx(styles.ListItem)}>
            <div className={clsx(styles.ListItem_title)}>{title}</div>
            <div className={clsx(styles.ListItem_text)}>{text}</div>
        </div>
    )
}

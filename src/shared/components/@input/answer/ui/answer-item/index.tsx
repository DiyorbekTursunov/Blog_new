import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface IAnswerItem {
    title: string
    isActive: boolean
    onChange: (value: string) => void
}

export const AnswerItem: FC<IAnswerItem> = ({title, isActive, onChange}) => {
    return (
        <div
            className={clsx(styles.AnswerItem, isActive && styles.active)}
            onClick={() => onChange(title)}
        >
            {title}
        </div>
    )
}

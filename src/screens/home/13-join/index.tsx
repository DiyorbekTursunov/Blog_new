import clsx from "clsx"
import {FC} from "react"

import {dataCards} from "./data/dataCards"
import styles from "./index.module.scss"
import {Card} from "./ui/card"

interface IJoin {}

export const Join: FC<IJoin> = () => {
    return (
        <div className={clsx(styles.Join)}>
            {dataCards.map((e, i) => (
                <Card {...e} key={i} />
            ))}
        </div>
    )
}

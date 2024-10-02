import clsx from "clsx"
import {FC} from "react"

import {Section} from "shared/components/@section"

import {dataCards} from "./data/dataCards"
import styles from "./index.module.scss"
import {Card} from "./ui/card"
import {Selector} from "./ui/selector"

interface IChoose {}

export const Choose: FC<IChoose> = () => {
    return (
        <div className={clsx(styles.Choose)}>
            <Section.Title className={clsx(styles.Choose_title)}>
                Choose what's best for you
            </Section.Title>
            <Selector className={clsx(styles.Choose_selector)} />
            <div className={clsx(styles.Choose_card)}>
                {dataCards.map((e, i) => (
                    <Card {...e} key={i} />
                ))}
            </div>
        </div>
    )
}

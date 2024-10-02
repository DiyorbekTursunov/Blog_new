import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {Button} from "shared/components/@button/button"
import {Section} from "shared/components/@section"
import {Icons} from "shared/icons"

import {dataCards} from "./data/dataCards"
import styles from "./index.module.scss"
import {Card} from "./ui/card"

interface ILoved {}

export const Loved: FC<ILoved> = () => {
    return (
        <div className={clsx(styles.Loved)}>
            <div className={clsx(styles.Loved_bg)}>
                <Image src={"/assets/home/09-loved/bg.webp"} fill alt="bg" />
            </div>
            <div className={clsx(styles.Loved_cards)}>
                {dataCards.map((e, i) => (
                    <Card {...e} index={i} key={i} />
                ))}
            </div>
            <div className={clsx(styles.Loved_content)}>
                <Section.Title className={clsx(styles.Loved_title)}>
                    Loved by traders <br />
                    worldwide
                </Section.Title>
                <div className={clsx(styles.Loved_text)}>
                    Simplicity is easy when you just skip tons of
                    mission-critical features.
                </div>
                <Button className={clsx(styles.Loved_btn)} style="purple">
                    View all reviews on TrustPilot <Icons.Arrow />
                </Button>
            </div>
        </div>
    )
}

import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {Section} from "shared/components/@section"
import {Logo} from "shared/components/logo"

import {dataCards} from "./data/dataCards"
import styles from "./index.module.scss"
import {Card} from "./ui/card"

interface IOurAdvantages {}

export const OurAdvantages: FC<IOurAdvantages> = () => {
    return (
        <div className={clsx(styles.OurAdvantages)}>
            <div className={clsx(styles.OurAdvantages_bg)}>
                <Image
                    src={"/assets/home/04-our-advantages/light.webp"}
                    width={1500}
                    height={1000}
                    quality={100}
                    alt="light"
                />
            </div>
            <Section.Label>Our Advantages</Section.Label>
            <Section.Title className={clsx(styles.OurAdvantages_title)}>
                How does <Logo.small /> FXIFY
                <br /> compare with other companies?
            </Section.Title>
            <div className={clsx(styles.OurAdvantages_cards)}>
                {dataCards.map((e, i) => (
                    <Card {...e} key={i} />
                ))}
            </div>
        </div>
    )
}

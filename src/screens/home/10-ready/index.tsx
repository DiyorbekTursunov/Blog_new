import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {Section} from "shared/components/@section"

import styles from "./index.module.scss"

interface IReady {}

export const Ready: FC<IReady> = () => {
    return (
        <div className={clsx(styles.Ready)}>
            <Section.Title className={clsx(styles.Ready_title)}>
                Ready <br />
                to dive in?
            </Section.Title>
            <div className={clsx(styles.Ready_bg)}>
                <Image src={"/assets/home/10-ready/bg.webp"} fill alt="bg" />
            </div>
        </div>
    )
}

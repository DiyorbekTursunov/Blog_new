"use client"

import clsx from "clsx"
import {FC} from "react"

import {Button} from "shared/components/@button/button"
import {Section} from "shared/components/@section"
import {Icons} from "shared/icons"

import {dataList} from "./data/dataList"
import styles from "./index.module.scss"
import {Card} from "./ui/card"

interface IOutBenefits {}

export const OutBenefits: FC<IOutBenefits> = () => {
    return (
        <div className={clsx(styles.OutBenefits)}>
            <div className={clsx(styles.OutBenefits_header)}>
                <div className={clsx(styles.OutBenefits_header_half)}>
                    <Section.Label>Our Benefits</Section.Label>
                    <Section.Title className={clsx(styles.OutBenefits_title)}>
                        The benefits <br />
                        that set us apart
                    </Section.Title>
                </div>
                <div className={clsx(styles.OutBenefits_header_half)}>
                    <div className={clsx(styles.OutBenefits_text)}>
                        Demonstrate your trading prowess, complete the challenge
                        and receive allocated simulated funds from the firm to
                        participate in the futures market without risking your
                        own capital
                    </div>
                    <Button style="purple">
                        Get Funded <Icons.Arrow />
                    </Button>
                </div>
            </div>
            <div className={clsx(styles.OutBenefits_grid)}>
                {dataList.map((e, i) => (
                    <Card {...e} num={i + 1} key={i} />
                ))}
            </div>
        </div>
    )
}

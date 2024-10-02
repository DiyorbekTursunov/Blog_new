import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {Button} from "shared/components/@button/button"
import {BorderGradientLight} from "shared/components/border-gradient-light"
import {Icons} from "shared/icons"

import {dataList} from "./data/dataList"
import styles from "./index.module.scss"
import {ListItem} from "./ui/list-item"

interface IHero {}

export const Hero: FC<IHero> = () => {
    return (
        <div className={clsx(styles.Hero)}>
            <div className={clsx(styles.Hero_bg)}>
                <Image
                    src={"/dev/home/01-hero/bg.webp"}
                    width={2000}
                    height={2000}
                    quality={100}
                    alt="hero-bg"
                />
            </div>
            <div className={clsx(styles.Hero_content)}>
                <div className={clsx(styles.Hero_half)}>
                    <div className={clsx(styles.Hero_title)}>
                        Manage simulated capital up to $600K
                    </div>
                    <div className={clsx(styles.Hero_list)}>
                        {dataList.map((e, i) => (
                            <ListItem {...e} key={i} />
                        ))}
                    </div>
                </div>
                <div className={clsx(styles.Hero_half)}>
                    <div className={clsx(styles.Hero_text)}>
                        Demonstrate your trading prowess, complete the challenge
                        and receive allocated simulated funds from the firm to
                        participate in the futures market without risking your
                        own capital
                    </div>
                    <div className={clsx(styles.Hero_buttons)}>
                        <div className={clsx(styles.Hero_button)}>
                            <BorderGradientLight style="blue" />
                            <Button style="purple">
                                Get Funded <Icons.Arrow />
                            </Button>
                        </div>
                        <Button style="star fly">Join our Discord</Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.Hero_card)}>
                <BorderGradientLight />
                <div className={clsx(styles.Hero_card_title)}>
                    Get started today
                </div>
                <div className={clsx(styles.Hero_card_text)}>
                    Sign up, select your desired challenge account and Get
                    Funded
                </div>
                <Button
                    className={clsx(styles.Hero_card_button)}
                    style="purple"
                >
                    Choose your Plan
                </Button>
            </div>
        </div>
    )
}

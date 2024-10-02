import clsx from "clsx"
import {FC} from "react"

import {Button} from "shared/components/@button/button"
import {FlyingParticles} from "shared/components/flying-particles"
import {Logo} from "shared/components/logo"
import {Icons} from "shared/icons"

import {dataNav} from "@/data/dataNav"
import {dataSocials} from "@/data/dataSocials"

import styles from "./index.module.scss"
import {NavItem} from "./ui/nav-item"
import Link from "next/link"

interface IHeader {}

export const Header: FC<IHeader> = () => {
    return (
        <div className={`${clsx(styles.Header)} bg-[#04030D] pb-3`}>
            <div className={clsx(styles.Header_half)}>
                <Link href="/" className={clsx(styles.Header_logo)}>
                    <Logo.big />
                </Link>
                <div className={clsx(styles.Header_nav)}>
                    {dataNav.map((e, i) => (
                        <NavItem {...e} num={i} key={i} />
                    ))}
                </div>
            </div>
            <div className={clsx(styles.Header_half)}>
                <a
                    href={dataSocials.discord.href}
                    className={clsx(styles.Header_social)}
                    target="_blank"
                >
                    <dataSocials.discord.Icon /> {dataSocials.discord.text}
                </a>
                <div className={clsx(styles.Header_buttons)}>
                    <Button style="star fly">Login</Button>
                    <Button style="purple">
                        Get Funded <Icons.Arrow />
                    </Button>
                </div>
            </div>
        </div>
    )
}

import clsx from "clsx"
import {FC} from "react"

import {INav} from "interfaces/global"

import styles from "./index.module.scss"

interface INavItem extends INav {
    num: number
}

export const NavItem: FC<INavItem> = ({num, title, href}) => {
    return (
        <a href={href} className={clsx(styles.NavItem)}>
            <span>0.{num + 1} /</span> {title}
        </a>
    )
}

import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

export interface INavItem {
    href: string
    title: string
}

export const NavItem: FC<INavItem> = ({href, title}) => {
    return (
        <a href={href} className={clsx(styles.NavItem)}>
            {title}
        </a>
    )
}

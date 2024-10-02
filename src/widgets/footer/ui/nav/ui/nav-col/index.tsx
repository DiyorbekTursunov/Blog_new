import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"
import {INavItem, NavItem} from "./ui/nav-item"

export interface INavCol {
    title: string
    list: INavItem[]
}

export const NavCol: FC<INavCol> = ({title, list}) => {
    return (
        <div className={clsx(styles.NavCol)}>
            <div className={clsx(styles.NavCol_title)}>{title}</div>
            <div className={clsx(styles.NavCol_list)}>
                {list.map((e, i) => (
                    <NavItem {...e} key={i} />
                ))}
            </div>
        </div>
    )
}

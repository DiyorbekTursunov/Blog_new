import clsx from "clsx"
import {FC} from "react"

import {dataNav} from "./data/dataNav"
import styles from "./index.module.scss"
import {NavCol} from "./ui/nav-col"

interface INav {}

export const Nav: FC<INav> = () => {
    return (
        <div className={clsx(styles.Nav)}>
            {dataNav.map((e, i) => (
                <NavCol {...e} key={i} />
            ))}
        </div>
    )
}

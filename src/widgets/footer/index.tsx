import clsx from "clsx"
import {FC} from "react"

import {Logo} from "shared/components/logo"

import {dataList} from "./data/dataList"
import styles from "./index.module.scss"
import {ListItem} from "./ui/list-item"
import {Nav} from "./ui/nav"

interface IFooter {}

export const Footer: FC<IFooter> = () => {
    return (
        <div className={clsx(styles.Footer)}>
            <div className={clsx(styles.Footer_header)}>
                <div className={clsx(styles.Footer_info)}>
                    <div className={clsx(styles.Footer_info_logo)}>
                        <Logo.big />
                    </div>
                    <div className={clsx(styles.Footer_info_text)}>
                        FXIFY is the premier futures prop trading firm for
                        beginner and experienced traders alike
                    </div>
                </div>
                <Nav />
            </div>
            <div className={clsx(styles.Footer_separator)}></div>
            <div className={clsx(styles.Footer_list)}>
                {dataList.map((e, i) => (
                    <ListItem {...e} key={i} />
                ))}
            </div>
            <div className={clsx(styles.Footer_copyright)}>
                © 2023 - {new Date().getFullYear()} FXIFY. All rights reserved.
            </div>
        </div>
    )
}

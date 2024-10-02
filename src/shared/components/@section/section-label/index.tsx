import clsx from "clsx"
import {FC, PropsWithChildren} from "react"

import styles from "./index.module.scss"

interface ISectionLabel {}

export const SectionLabel: FC<PropsWithChildren<ISectionLabel>> = ({
    children,
}) => {
    return (
        <div className={clsx(styles.SectionLabel)}>
            <div className={clsx(styles.SectionLabel_text)}>{children}</div>
        </div>
    )
}

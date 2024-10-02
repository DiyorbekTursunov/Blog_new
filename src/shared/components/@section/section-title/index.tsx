import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, PropsWithChildren} from "react"

import styles from "./index.module.scss"

interface ISectionTitle extends ComponentPropsWithoutRef<"div"> {}

export const SectionTitle: FC<PropsWithChildren<ISectionTitle>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.SectionTitle, className)} {...props}>
            {children}
        </div>
    )
}

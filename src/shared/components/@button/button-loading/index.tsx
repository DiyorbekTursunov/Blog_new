import clsx from "clsx"
import {FC, PropsWithChildren} from "react"

import {LoadingRing} from "shared/components/loading-ring"

import {Button, IButton} from "../button"

import styles from "./index.module.scss"
import {Check} from "./ui/check"

export type IButtonLoadStatuses = null | "pending" | "load"

interface IButtonLoading extends IButton {
    statusLoad: IButtonLoadStatuses
    Icon?: FC
}

export const ButtonLoading: FC<PropsWithChildren<IButtonLoading>> = ({
    children,
    statusLoad,
    className,
    Icon,
    ...restProps
}) => {
    return (
        <Button
            {...restProps}
            className={clsx(styles.ButtonLoading, className)}
            disabled={statusLoad == null ? false : true}
        >
            {children}{" "}
            {statusLoad == null ? (
                <>{Icon && <Icon />}</>
            ) : statusLoad == "pending" ? (
                <LoadingRing />
            ) : (
                statusLoad == "load" && <Check />
            )}
        </Button>
    )
}

"use client"

import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, PropsWithChildren} from "react"

import {getStylesModule} from "utils/getStyles"

import {BorderGradient} from "shared/components/border-gradient"
import {FlyingParticles} from "shared/components/flying-particles"

import styles from "./index.module.scss"

export interface IButton
    extends Omit<ComponentPropsWithoutRef<"button">, "style"> {
    style?: string // write inline styles through ","
    href?: string
}

export const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    style = "",
    href,
    ...buttonProps
}) => {
    return (
        <button
            {...buttonProps}
            className={clsx(
                styles.Button,
                className,
                ...getStylesModule(styles, style),
            )}
        >
            {style.includes("fly") && <FlyingParticles />}

            <a href={href}>{children}</a>
        </button>
    )
}

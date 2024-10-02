import clsx from "clsx"
import {FC} from "react"

import {BorderGradient, IBorderGradient} from "../border-gradient"

import styles from "./index.module.scss"

interface IBorderGradientLight extends IBorderGradient {}

export const BorderGradientLight: FC<IBorderGradientLight> = ({...props}) => {
    return (
        <div className={clsx(styles.BorderGradientLight)}>
            <BorderGradient {...props} />
            <BorderGradient {...props} />
        </div>
    )
}

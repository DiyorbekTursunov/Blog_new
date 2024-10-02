import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import styles from "./index.module.scss"

interface IMan {}

export const Man: FC<IMan> = () => {
    return (
        <div className={clsx(styles.Man)}>
            <Image
                className={clsx(styles.Man_bg)}
                src={"/assets/home/05-man/bg.avif"}
                width={1500}
                height={1500}
                quality={100}
                alt="bg"
            />
        </div>
    )
}

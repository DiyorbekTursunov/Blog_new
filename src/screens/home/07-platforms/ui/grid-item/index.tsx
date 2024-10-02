import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import styles from "./index.module.scss"

interface IGridItem {
    logo?: string
    isComing?: boolean
}

export const GridItem: FC<IGridItem> = ({logo}) => {
    return (
        <div className={clsx(styles.GridItem, logo && styles.image)}>
            {logo && (
                <Image
                    src={logo}
                    width={500}
                    height={500}
                    quality={100}
                    alt="logo"
                />
            )}
            <div className={clsx(styles.GridItem)}></div>
        </div>
    )
}

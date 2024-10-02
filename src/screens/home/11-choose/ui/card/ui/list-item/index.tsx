import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, useEffect, useRef} from "react"

import styles from "./index.module.scss"

export interface IListItem {
    title: string
    text: string
    info?: string
}

interface IListItemProps extends IListItem {
    isActive: boolean
    index: number
}

export const ListItem: FC<IListItemProps> = ({
    title,
    text,
    isActive,
    index,
}) => {
    const refRoot = useRef<HTMLDivElement>(null)

    const tl = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        const delay = (index - 5) / 4

        tl.current = gsap
            .timeline({
                paused: isActive ? false : true,
                defaults: {
                    duration: 1,
                    ease: "power2.inOut",
                },
                delay: delay > 0 ? delay : 0,
            })
            .fromTo(
                refRoot.current,
                {
                    autoAlpha: 0,
                    yPercent: 150,
                },
                {
                    autoAlpha: 1,
                    yPercent: 0,
                    ease: "back.out",
                },
            )
    }, [])

    useEffect(() => {
        if (isActive) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [isActive])

    return (
        <div className={clsx(styles.ListItem)} ref={refRoot}>
            <div className={clsx(styles.ListItem_title)}>
                {title} {isActive ? "+" : "-"}
            </div>
            <div className={clsx(styles.ListItem_text)}>{text}</div>
        </div>
    )
}

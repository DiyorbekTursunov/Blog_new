import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, useEffect, useRef} from "react"

import {gsapDelay} from "utils/gsap/gsapDelay"

import styles from "./index.module.scss"

export interface IInfoItem {
    suptitle: {
        text: string
        Icon: FC
    }
    title: string
    text: string
}

interface IInfoItemProps extends IInfoItem {
    isActive: boolean
}

export const InfoItem: FC<IInfoItemProps> = ({
    suptitle,
    title,
    text,
    isActive,
}) => {
    const refText = useRef<HTMLDivElement>(null)
    const refTextContainer = useRef<HTMLDivElement>(null)

    const tl = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        gsapDelay(() => {
            const text = new SplitText(refText.current, {
                type: "words",
            }).words

            tl.current = gsap
                .timeline({
                    paused: true,
                    defaults: {
                        duration: 1,
                        ease: "power2.inOut",
                    },
                })
                .fromTo(
                    refTextContainer.current,
                    {
                        height: 0,
                    },
                    {
                        height: refText.current?.getBoundingClientRect().height,
                    },
                )
                .fromTo(
                    text,
                    {
                        opacity: 0,
                        xPercent: 50,
                    },
                    {
                        opacity: 1,
                        stagger: 0.02,
                        xPercent: 0,
                        ease: "back.out",
                    },
                    "<",
                )
        })
    }, [])

    useEffect(() => {
        if (isActive) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [isActive])

    useEffect(() => {})

    return (
        <div className={clsx(styles.InfoItem, isActive && styles.active)}>
            <div className={clsx(styles.InfoItem_suptitle)}>
                <suptitle.Icon /> {suptitle.text}
            </div>
            <div className={clsx(styles.InfoItem_title)}>{title}</div>
            <div
                className={clsx(styles.InfoItem_text_container)}
                ref={refTextContainer}
            >
                <div className={clsx(styles.InfoItem_text)} ref={refText}>
                    {text}
                </div>
            </div>
        </div>
    )
}

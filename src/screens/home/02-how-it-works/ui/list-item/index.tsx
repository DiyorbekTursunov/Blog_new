import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, useEffect, useRef} from "react"

import {gsapDelay} from "utils/gsap/gsapDelay"

import {Icons} from "shared/icons"

import styles from "./index.module.scss"

export interface IListItemData {
    position: number
    activeTrigger: number
    title: string
    text: string
    type: "right" | "left"
}

interface IListItem extends IListItemData {
    isActive: boolean
    isPrevious: boolean
}

export const ListItem: FC<IListItem> = ({
    title,
    text,
    type,
    isActive,
    isPrevious,
}) => {
    const refRoot = useRef<HTMLDivElement>(null)
    const refTitle = useRef<HTMLDivElement>(null)
    const refText = useRef<HTMLDivElement>(null)
    const refBorder = useRef<HTMLDivElement>(null)
    const refLine = useRef<HTMLDivElement>(null)
    const refCrosshair = useRef<HTMLDivElement>(null)

    const lines = useRef<Element[]>()

    const showAnimation = (isActive: boolean) => {
        gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            },
        })
            .to(refBorder.current, {
                yPercent: isActive ? 0 : 20,
                opacity: isActive ? 1 : 0,
            })
            .to(
                refRoot.current,
                {
                    yPercent: 0,
                    opacity: 1,
                },
                "<10%",
            )
            .to(
                refLine.current,
                {
                    opacity: isActive ? 1 : 0,
                },
                "<10%",
            )
            .to(
                refTitle.current,
                {
                    yPercent: isActive ? 0 : 50,
                    opacity: isActive ? 1 : 0,
                },
                "<10%",
            )
            .to(
                lines.current as HTMLDivElement[],
                {
                    opacity: isActive ? 1 : 0,
                    yPercent: isActive ? 0 : 100,
                    stagger: {
                        from: isActive ? "start" : "end",
                        amount: 0.1,
                    },
                },
                "<10%",
            )
            .to(
                refCrosshair.current,
                {
                    rotate: isActive ? 0 : 135,
                    opacity: isActive ? 1 : 0,
                },
                "<10%",
            )
    }

    const previousAnimation = () => {
        gsap.killTweensOf(lines.current as HTMLDivElement[])
        gsap.killTweensOf(refRoot.current)
        gsap.killTweensOf(refLine.current)

        gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            },
        })
            .to(refRoot.current, {
                yPercent: 70,
                opacity: 1,
            })
            .to(
                refLine.current,
                {
                    opacity: 0,
                },
                "<10%",
            )
            .to(
                lines.current as HTMLDivElement[],
                {
                    opacity: 0,
                    yPercent: 50,
                    stagger: {
                        from: "end",
                        amount: 0.1,
                    },
                    duration: 0.5,
                },
                "<10%",
            )
    }

    useGSAP(() => {
        gsapDelay(() => {
            const newLines = new SplitText(refText.current, {
                type: "lines",
            }).lines

            console.log(newLines)

            lines.current = newLines
        })
    }, [])

    useEffect(() => {
        !isPrevious && showAnimation(isActive)
        isPrevious && previousAnimation()
    }, [isActive, isPrevious])

    useEffect(() => {
        gsapDelay(() => {
            showAnimation(isActive)
        })
    }, [])

    return (
        <div className={clsx(styles.ListItem, styles[type])} ref={refRoot}>
            <div className={clsx(styles.ListItem_border)} ref={refBorder}>
                <div
                    className={clsx(styles.ListItem_crosshair)}
                    ref={refCrosshair}
                >
                    <Icons.Crosshair />
                </div>
                <div className={clsx(styles.ListItem_line)} ref={refLine} />
            </div>
            <div className={clsx(styles.ListItem_content)}>
                <div className={clsx(styles.ListItem_title)} ref={refTitle}>
                    {title}
                </div>
                <div className={clsx(styles.ListItem_text)} ref={refText}>
                    {text}
                </div>
            </div>
        </div>
    )
}

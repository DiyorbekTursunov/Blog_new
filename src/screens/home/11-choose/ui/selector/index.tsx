"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {ComponentPropsWithoutRef, FC, useEffect, useRef, useState} from "react"

import {getDistance} from "utils/gsap/getElementDistance"

import {BorderGradientLight} from "shared/components/border-gradient-light"

import {dataSelectors} from "../../data/dataSelectors"

import styles from "./index.module.scss"

interface ISelector extends ComponentPropsWithoutRef<"div"> {}

export const Selector: FC<ISelector> = ({className}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [activeSelect, setActiveSelect] = useState<number>(-1)

    const refContent = useRef<HTMLDivElement>(null)
    const refSelects = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        if (refSelects.current[activeSelect]) {
            const selectPrams =
                refSelects.current[activeSelect].getBoundingClientRect()

            const dist = getDistance(
                refContent.current,
                refSelects.current[activeSelect],
                [0, 0],
                [0, 0],
            )

            console.log(dist)

            gsap.to(`.${styles.Selector_select}`, {
                width: selectPrams.width,
                x: dist.x,
                duration: 1,
                ease: "power2",
            })
        }
    }, [activeSelect])

    useEffect(() => {
        setTimeout(() => {
            setActiveSelect(0)
        }, 100)
    }, [])

    return (
        <div
            className={clsx(styles.Selector, className)}
            onMouseEnter={() => {
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
            }}
        >
            <div className={clsx(styles.Selector_border)}>
                <BorderGradientLight
                    isActive={isHover}
                    speedMultiplayer={0.2}
                />
            </div>
            <div className={clsx(styles.Selector_content)} ref={refContent}>
                <div className={clsx(styles.Selector_select)} />
                {dataSelectors.map((e, i) => (
                    <div
                        className={clsx(
                            styles.Selector_content_item,
                            activeSelect === i && styles.active,
                        )}
                        onClick={() => {
                            setActiveSelect(i)
                        }}
                        ref={(ref) => {
                            if (ref) refSelects.current[i] = ref
                        }}
                        key={i}
                    >
                        {e.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

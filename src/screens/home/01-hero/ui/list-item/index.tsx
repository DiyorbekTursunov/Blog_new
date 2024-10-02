"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, Fragment, useCallback, useRef} from "react"

import {createScrollTrigger} from "utils/gsap/createScrollStrigger"
import {gsapDelay} from "utils/gsap/gsapDelay"

import styles from "./index.module.scss"

export interface IListItem {
    value: string
    text: string
}

export const ListItem: FC<IListItem> = ({value, text}) => {
    const refRoot = useRef<HTMLDivElement>(null)
    const refValue = useRef<HTMLDivElement>(null)
    const refText = useRef<HTMLDivElement>(null)

    const tl = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        gsapDelay(() => {
            let match = value.match(/(\D+)|([0-9]+)/gi)

            if (refRoot.current && match) {
                const number = parseInt(match[0])

                const numberWithCommas = (n: number) => {
                    var parts = n.toString().split(".")
                    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }

                let counterNew = {var: 0}
                let tal = refRoot.current.querySelector(".counter")

                tl.current = gsap
                    .timeline({
                        paused: true,
                        defaults: {
                            duration: 1,
                            ease: "power2.inOut",
                        },
                    })
                    .fromTo(
                        refValue.current,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            duration: 1,
                        },
                    )
                    .fromTo(
                        counterNew,
                        {
                            var: 0,
                        },
                        {
                            var: number,
                            onUpdate: function () {
                                if (tal) {
                                    let nwc = numberWithCommas(counterNew.var)
                                    tal.innerHTML = nwc + " "
                                }
                            },
                            duration: 1.5,
                            ease: "power2.out",
                        },
                        "<40%",
                    )
                    .fromTo(
                        refText.current,
                        {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            duration: 1,
                        },
                        "<",
                    )

                createScrollTrigger({
                    trigger: refRoot.current,
                    tl: tl.current,
                })
            }
        })
    }, [])

    const ReplacementValue = useCallback((text: string) => {
        let segments = text.match(/(\D+)|([0-9]+)/gi)
        if (!segments) {
            return <>{text}</>
        }

        return segments.map((value: any) => (
            <Fragment key={value}>
                {isNaN(value) ? (
                    <>{value}</>
                ) : (
                    <span className="counter">{+value}</span>
                )}
            </Fragment>
        ))
    }, [])

    return (
        <div className={clsx(styles.ListItem)} ref={refRoot}>
            <div className={clsx(styles.ListItem_counter)} ref={refValue}>
                {ReplacementValue(value)}
            </div>
            <div className={clsx(styles.ListItem_text)} ref={refText}>
                {text}
            </div>
        </div>
    )
}

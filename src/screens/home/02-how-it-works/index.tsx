"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import MotionPathPlugin from "gsap/MotionPathPlugin"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {FC, useState} from "react"

import {gsapDelay} from "utils/gsap/gsapDelay"

import {Section} from "shared/components/@section"

import {dataList} from "./data/dataList"
import styles from "./index.module.scss"
import {Line} from "./ui/line"
import {ListItem} from "./ui/list-item"

interface IHowItWorks {}

export const HowItWorks: FC<IHowItWorks> = () => {
    const [activeIndex, setActiveIndex] = useState<number>(-1)

    const brakePoints: number[] = dataList.map((e) => e.activeTrigger)

    useGSAP(() => {
        gsapDelay(() => {
            gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

            const dots = gsap.utils.toArray(
                `.${styles.HowItWorks_list_item}`,
            ) as HTMLDivElement[]

            dots.map((e, i) =>
                gsap.set(e, {
                    motionPath: {
                        path: "#home-how-line",
                        align: "#home-how-line",
                        alignOrigin: [0.5, 0.5],
                        end: dataList[i].position,
                    },
                }),
            )

            gsap.timeline()
                .fromTo(
                    ".home-how-lines",
                    {drawSVG: "20% 20%"},
                    {
                        drawSVG: `20% 69%`,
                        scrollTrigger: {
                            trigger: "#home-how-line",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: 2,
                            // markers: true,
                            onUpdate(e) {
                                const progress = e.progress
                                console.log(progress)

                                let newActiveIndex = -1

                                brakePoints.map((e, i) => {
                                    if (e < progress) newActiveIndex = i
                                })

                                setActiveIndex(newActiveIndex)
                            },
                        },
                    },
                )
                .fromTo(
                    "#home-how-line-2",
                    {drawSVG: "74% 74%", opacity: 0},
                    {
                        drawSVG: `20% 69%`,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: "#home-how-line",
                            start: "top bottom",
                            end: "bottom center",
                            scrub: 2,
                        },
                    },
                    "<",
                )
                .fromTo(
                    ".home-how-miniLines",
                    {drawSVG: "0% 0%", opacity: 0},
                    {
                        drawSVG: `0% 100%`,
                        opacity: 1,
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: "#home-how-line",
                            start: "top center",
                            end: "bottom center",
                            scrub: 2,
                            // markers: true,
                        },
                    },
                    "<",
                )
                .fromTo(
                    "#home-how-plume",
                    {
                        // yPercent: 20,
                        opacity: 0,
                    },
                    {
                        // yPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: "#home-how-line",
                            start: "top center",
                            end: "top top+=20%",
                            scrub: 2,
                            // markers: true,
                        },
                    },
                    "<",
                )
        })
    }, [])

    return (
        <div className={clsx(styles.HowItWorks)}>
            <Section.Label>How it Works</Section.Label>
            <Section.Title className={clsx(styles.HowItWorks_title)}>
                Easy way to become a funded trader
            </Section.Title>
            <div className={clsx(styles.HowItWorks_list)}>
                <div className={clsx(styles.HowItWorks_line)}>
                    <Line />
                </div>
                {dataList.map((e, i) => (
                    <div className={clsx(styles.HowItWorks_list_item)} key={i}>
                        <ListItem
                            {...e}
                            isPrevious={i < activeIndex}
                            isActive={i == activeIndex}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

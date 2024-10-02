"use client"

import clsx from "clsx"
import Image from "next/image"
import {FC, useEffect, useState} from "react"

import {Button} from "shared/components/@button/button"
import {Section} from "shared/components/@section"
import {Icons} from "shared/icons"

import {dataSlides} from "./data/dataSlides"
import styles from "./index.module.scss"
import {ImageItem} from "./ui/image-item"
import {InfoItem} from "./ui/info-item"

interface IOurPlatform {}

export const OurPlatform: FC<IOurPlatform> = () => {
    const [activeSlide, setActiveSlide] = useState<number>(-1)

    useEffect(() => {
        setTimeout(() => {
            setActiveSlide(dataSlides.length - 1)
            setTimeout(() => {
                setActiveSlide(0)
            }, 100)
        }, 100)
    }, [])

    return (
        <div className={clsx(styles.OurPlatform)}>
            <Section.Label>Our Platform</Section.Label>
            <Section.Title className={clsx(styles.OurPlatform_title)}>
                Get Funded with FFX trading platform
            </Section.Title>
            <div className={clsx(styles.OurPlatform_slides)}>
                <div className={clsx(styles.OurPlatform_slides_info)}>
                    {dataSlides.map((e, i) => (
                        <div
                            className={clsx(styles.OurPlatform_slide)}
                            onMouseEnter={() => {
                                setActiveSlide(i)
                            }}
                            key={i}
                        >
                            <InfoItem
                                {...e.info}
                                isActive={activeSlide === i}
                            />
                        </div>
                    ))}
                </div>
                <div className={clsx(styles.OurPlatform_slides_image)}>
                    {dataSlides.map((e, i) => (
                        <ImageItem
                            {...e.image}
                            isActive={activeSlide === i}
                            isPrev={activeSlide > i}
                        />
                    ))}
                </div>
            </div>
            <Button className={clsx(styles.OurPlatform_button)} style="purple">
                Get Funded <Icons.Arrow />
            </Button>
        </div>
    )
}

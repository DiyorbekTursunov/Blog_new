import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import Image from "next/image"
import {FC, useRef} from "react"

import styles from "./index.module.scss"

export interface IImageItem {
    src: string
}

interface IImageItemProps extends IImageItem {
    isActive: boolean
    isPrev: boolean
}

export const ImageItem: FC<IImageItemProps> = ({src, isActive, isPrev}) => {
    const refRoot = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.killTweensOf(refRoot.current)

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut",
            },
        })

        if (isActive) {
            tl.to(refRoot.current, {
                autoAlpha: 1,
                yPercent: 0,
            })
        } else {
            tl.to(refRoot.current, {
                autoAlpha: 0,
                yPercent: isPrev ? -100 : 100,
            })
        }
    }, [isActive, isPrev])

    return (
        <div className={clsx(styles.ImageItem)} ref={refRoot}>
            <Image
                src={src}
                width={1500}
                height={1500}
                quality={100}
                alt="slide"
            />
        </div>
    )
}

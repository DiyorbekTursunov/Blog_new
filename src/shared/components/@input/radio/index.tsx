import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, useEffect, useRef, useState} from "react"

import styles from "./index.module.scss"

interface IRadio {
    value: boolean
    title: string
    text?: string
    onChange?: (value: boolean) => void
}

export const Radio: FC<IRadio> = ({value, title, text, onChange}) => {
    const [isActive, setIsActive] = useState<boolean>(value)

    const refSwitch = useRef<HTMLDivElement>(null)
    const refRing = useRef<HTMLDivElement>(null)

    const animateSwitch = (isActive: boolean) => {
        gsap.timeline({
            defaults: {
                duration: 0.4,
                ease: "power1.inOut",
            },
        })
            .to(
                refSwitch.current,
                {
                    background: isActive ? "#0E5CFD" : "#F2F4F7",
                },
                0,
            )
            .to(
                refRing.current,
                {
                    background: isActive ? "#fff" : "#F9FAFB",
                    xPercent: isActive ? 100 : 0,
                },
                0,
            )
    }

    useGSAP(() => {
        animateSwitch(value)
    }, [value])

    useEffect(() => {
        onChange?.(isActive)
        animateSwitch(isActive)
    }, [isActive])

    return (
        <div className={clsx(styles.Radio)}>
            <div className={clsx(styles.Radio_header)}>
                <div
                    className={clsx(styles.Radio_switch)}
                    onClick={() => {
                        setIsActive((prev) => !prev)
                    }}
                    ref={refSwitch}
                >
                    <div
                        className={clsx(styles.Radio_switch_ring)}
                        ref={refRing}
                    ></div>
                </div>
                <div className={clsx(styles.Radio_title)}>{title}</div>
            </div>
            <div className={clsx(styles.Radio_text)}>{text}</div>
        </div>
    )
}

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, PropsWithChildren, useEffect, useRef} from "react"

import {Icons} from "shared/icons"

import {IModalWrapper, ModalWrapper} from "../modal-wrapper"

import styles from "./index.module.scss"

interface IModalBottom extends IModalWrapper {}

export const ModalBottom: FC<PropsWithChildren<IModalBottom>> = ({
    modal,
    children,
}) => {
    const refRoot = useRef<HTMLDivElement>(null)

    const tl = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        tl.current = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                refRoot.current,
                {
                    yPercent: 100,
                },
                {
                    yPercent: 0,
                    duration: 1,
                    ease: "power2.inOut",
                },
            )
    }, [])

    useEffect(() => {
        if (modal.isActive) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [modal.isActive])

    return (
        <ModalWrapper modal={modal} tl={tl.current}>
            <div className={clsx(styles.ModalBottom)} ref={refRoot}>
                <button
                    className={clsx(styles.ModalBottom_close)}
                    onClick={() => modal.close()}
                >
                    <Icons.Crosshair />
                </button>
                {children}
            </div>
        </ModalWrapper>
    )
}

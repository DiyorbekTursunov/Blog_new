"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"
import {FC, useEffect, useRef, useState} from "react"

import {Button, IButton} from "shared/components/@button/button"
import {BorderGradientLight} from "shared/components/border-gradient-light"
import {Icons} from "shared/icons"

import styles from "./index.module.scss"
import {IListItem, ListItem} from "./ui/list-item"

export interface ICard {
    title: string
    text: string
    button: {
        props: IButton
        text: string
    }
    list: IListItem[]
}

gsap.registerPlugin(TextPlugin)

export const Card: FC<ICard> = ({title, text, button, list}) => {
    const [isHover, setIsHover] = useState<boolean>(false)
    const [isMore, setIsMore] = useState<boolean>(false)

    const refMore = useRef<HTMLDivElement>(null)
    const refList = useRef<HTMLDivElement>(null)
    const refListInner = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.to(refMore.current, {
            text: isMore ? "less" : "more",
            duration: 0.5,
            ease: "power2.inOut",
        })

        if (list.length > 5 && refListInner.current && refList.current) {
            const firstChildParams =
                refListInner.current.children[0].getBoundingClientRect()

            const moreHeight =
                refListInner.current.getBoundingClientRect().height
            const lessHeight = firstChildParams.height * 5

            gsap.to(refList.current, {
                height: isMore ? moreHeight : lessHeight,
                duration: (list.length - 5) / 4,
                ease: "power2.inOut",
            })
        }
    }, [isMore])

    return (
        <div
            className={clsx(styles.Card)}
            onMouseEnter={() => {
                setIsHover(true)
            }}
            onMouseLeave={() => {
                setIsHover(false)
            }}
        >
            <div className={clsx(styles.Card_border)}>
                <BorderGradientLight isActive={isHover} />
            </div>
            <div className={clsx(styles.Card_content)}>
                <div className={clsx(styles.Card_title)}>{title}</div>
                <div className={clsx(styles.Card_price)}>
                    $300 <span>/ month</span>
                </div>
                <div className={clsx(styles.Card_text)}>{text}</div>
                <Button className={clsx(styles.Card_button)} {...button.props}>
                    {button.text} <Icons.Arrow />
                </Button>
                <div className={clsx(styles.Card_separator)}></div>
                <div className={clsx(styles.Card_benefits)}>
                    <div className={clsx(styles.Card_benefits_title)}>
                        Get started today:
                    </div>
                    <div
                        className={clsx(styles.Card_benefits_list)}
                        ref={refList}
                    >
                        <div
                            className={clsx(styles.Card_benefits_list_inner)}
                            ref={refListInner}
                        >
                            {list.map((e, i) => (
                                <ListItem
                                    {...e}
                                    isActive={i < 5 ? true : isMore}
                                    index={i}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                    {list.length > 5 && (
                        <div
                            className={clsx(
                                styles.Card_benefits_more,
                                isMore && styles.active,
                            )}
                            onClick={() => {
                                setIsMore((prev) => !prev)
                            }}
                        >
                            <span>
                                View <span ref={refMore}>more</span>
                            </span>{" "}
                            <Icons.Arrow.Nav />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

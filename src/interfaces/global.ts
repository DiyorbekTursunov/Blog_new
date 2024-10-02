import {FC} from "react"
import {Swiper} from "swiper/types"

export interface ISwiper extends Swiper {
    enabled?: boolean
}

export interface INav {
    title: string
    href?: string
    section?: string
}

// custom
export interface ISocial {
    href?: string
    Icon: FC
    text?: string
}

export interface ITime {
    hours: number
    minutes: number
    seconds: number
}

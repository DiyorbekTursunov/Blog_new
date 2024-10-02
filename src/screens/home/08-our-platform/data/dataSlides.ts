import {Icons} from "shared/icons"

import {IImageItem} from "../ui/image-item"
import {IInfoItem} from "../ui/info-item"

interface ISlide {
    info: IInfoItem
    image: IImageItem
}

export const dataSlides: ISlide[] = [
    {
        info: {
            suptitle: {
                text: "Relax",
                Icon: Icons.Stars,
            },
            title: "Trading charts",
            text: "Get access to the best and most popular charting software out there, with all of the drawing tools, indicators, and customizations that traders love. TopstepX is the only Futures trading platform that has built in TradingView charts.",
        },
        image: {
            src: "/assets/home/08-our-platform/slides/1.avif",
        },
    },
    {
        info: {
            suptitle: {
                text: "Your rules",
                Icon: Icons.Smile,
            },
            title: "Real-time indicator",
            text: "Get access to the best and most popular charting software out there, with all of the drawing tools, indicators, and customizations that traders love. TopstepX is the only Futures trading platform that has built in TradingView charts.",
        },
        image: {
            src: "/assets/home/08-our-platform/slides/1.avif",
        },
    },
    {
        info: {
            suptitle: {
                text: "Benefit",
                Icon: Icons.Percentage,
            },
            title: "No delay or interruptions",
            text: "Get access to the best and most popular charting software out there, with all of the drawing tools, indicators, and customizations that traders love. TopstepX is the only Futures trading platform that has built in TradingView charts.",
        },
        image: {
            src: "/assets/home/08-our-platform/slides/1.avif",
        },
    },
]

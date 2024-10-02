import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface IPercentage {}

export const Percentage: FC<IPercentage> = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.25 3.75L3.75 14.25M13.125 15C14.375 15 15 14.3571 15 12.75C15 11.1429 14.375 10.5 13.125 10.5C11.875 10.5 11.25 11.1429 11.25 12.75C11.25 14.3571 11.875 15 13.125 15ZM4.875 7.5C6.125 7.5 6.75 6.85714 6.75 5.25C6.75 3.64286 6.125 3 4.875 3C3.625 3 3 3.64286 3 5.25C3 6.85714 3.625 7.5 4.875 7.5Z"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

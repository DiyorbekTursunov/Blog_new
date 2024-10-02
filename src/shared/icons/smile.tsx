import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface ISmile {}

export const Smile: FC<ISmile> = () => {
    return (
        <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.02426 7.98399L6.94629 7.61719"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.6922 7.2047L10.6143 6.83789"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M6.875 11.6779C7.81875 11.9145 8.88946 11.9146 9.96689 11.6259C11.0443 11.3372 11.9715 10.8017 12.6706 10.125"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9.94043 11.7278L10.2989 12.4582C10.5699 13.0103 11.2341 13.2424 11.79 12.9792C12.3572 12.7108 12.595 12.0302 12.3185 11.4669L11.9741 10.7651"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <circle
                cx="9.5"
                cy="9"
                r="6.75"
                stroke="#6871FF"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

import {FC} from "react"

interface ICrosshair {}

export const Crosshair: FC<ICrosshair> = () => {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5 0L5 10" stroke="#7A7FDC" stroke-width="1.25" />
            <path
                d="M10 5L-2.98023e-07 5"
                stroke="#7A7FDC"
                stroke-width="1.25"
            />
        </svg>
    )
}

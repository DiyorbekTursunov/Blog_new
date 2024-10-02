import {FC} from "react"

interface ICheck {}

export const Check: FC<ICheck> = () => {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.02075 17.0107C13.1518 17.0107 16.5317 13.6308 16.5317 9.49976C16.5317 5.36871 13.1518 1.98877 9.02075 1.98877C4.88971 1.98877 1.50977 5.36871 1.50977 9.49976C1.50977 13.6308 4.88971 17.0107 9.02075 17.0107Z"
                stroke="black"
                strokeWidth="1.2993"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.83008 9.50012L7.95569 11.6257L12.2144 7.37451"
                stroke="black"
                strokeWidth="1.2993"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

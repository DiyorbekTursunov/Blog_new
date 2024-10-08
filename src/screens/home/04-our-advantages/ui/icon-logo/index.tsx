import clsx from "clsx"
import {FC} from "react"

import styles from "./index.module.scss"

interface IIconLogo {}

export const IconLogo: FC<IIconLogo> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="178"
            height="178"
            viewBox="0 0 178 178"
            fill="none"
        >
            <g filter="url(#filter0_d_192_13029)">
                <rect
                    x="54"
                    y="54"
                    width="70"
                    height="70"
                    rx="35"
                    fill="url(#paint0_linear_192_13029)"
                />
                <rect
                    x="55"
                    y="55"
                    width="68"
                    height="68"
                    rx="34"
                    stroke="url(#paint1_linear_192_13029)"
                    stroke-width="2"
                />
            </g>
            <g filter="url(#filter1_i_192_13029)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M84.0932 80C83.8377 80 83.7099 80 83.6123 80.0502C83.5264 80.0943 83.4566 80.1647 83.4128 80.2513C83.3631 80.3497 83.3631 80.4785 83.3631 80.7363V83.3788C83.3631 83.6366 83.3631 83.7654 83.4128 83.8638C83.4566 83.9504 83.5264 84.0208 83.6123 84.0649C83.7099 84.1151 83.8377 84.1151 84.0932 84.1151H87.1925C87.448 84.1151 87.5758 84.1151 87.6734 84.0649C87.7593 84.0208 87.8291 83.9504 87.8729 83.8638C87.9226 83.7654 87.9226 83.6366 87.9226 83.3788V80.7363C87.9226 80.4785 87.9226 80.3497 87.8729 80.2513C87.8291 80.1647 87.7593 80.0943 87.6734 80.0502C87.5758 80 87.448 80 87.1925 80H84.0932ZM105.27 80.0001C105.525 80.0001 105.653 80.0001 105.751 80.0502C105.837 80.0943 105.907 80.1647 105.95 80.2513C106 80.3498 106 80.4786 106 80.7363V83.3604C106 83.6181 106 83.7469 105.95 83.8454C105.907 83.932 105.837 84.0024 105.751 84.0465C105.653 84.0966 105.525 84.0966 105.27 84.0966H90.8207C90.5652 84.0966 90.4374 84.0966 90.3398 84.0465C90.2539 84.0024 90.1841 83.932 90.1403 83.8454C90.0906 83.7469 90.0906 83.6181 90.0906 83.3604V80.7363C90.0906 80.4786 90.0906 80.3498 90.1403 80.2513C90.1841 80.1647 90.2539 80.0943 90.3398 80.0502C90.4374 80.0001 90.5652 80.0001 90.8207 80.0001H105.27ZM72.7301 96.9999C72.4746 96.9999 72.3468 96.9999 72.2492 96.9497C72.1633 96.9056 72.0935 96.8352 72.0497 96.7486C72 96.6502 72 96.5213 72 96.2636V93.6396C72 93.3819 72 93.253 72.0497 93.1546C72.0935 93.068 72.1633 92.9976 72.2492 92.9535C72.3468 92.9033 72.4746 92.9033 72.7301 92.9033H87.1793C87.4348 92.9033 87.5626 92.9033 87.6602 92.9535C87.7461 92.9976 87.8159 93.068 87.8597 93.1546C87.9094 93.253 87.9094 93.3819 87.9094 93.6396V96.2636C87.9094 96.5213 87.9094 96.6502 87.8597 96.7486C87.8159 96.8352 87.7461 96.9056 87.6602 96.9497C87.5626 96.9999 87.4348 96.9999 87.1793 96.9999H72.7301ZM78.4033 86.4213C78.1477 86.4213 78.0199 86.4213 77.9223 86.4714C77.8365 86.5155 77.7666 86.5859 77.7229 86.6725C77.6732 86.771 77.6732 86.8998 77.6732 87.1575V89.9504C77.6732 90.2081 77.6732 90.337 77.7229 90.4354C77.7666 90.522 77.8365 90.5924 77.9223 90.6365C78.0199 90.6867 78.1477 90.6867 78.4033 90.6867H87.1777C87.4332 90.6867 87.561 90.6867 87.6586 90.6365C87.7445 90.5924 87.8143 90.522 87.8581 90.4354C87.9078 90.337 87.9078 90.2081 87.9078 89.9504V87.1575C87.9078 86.8998 87.9078 86.771 87.8581 86.6725C87.8143 86.5859 87.7445 86.5155 87.6586 86.4714C87.561 86.4213 87.4332 86.4213 87.1777 86.4213H78.4033ZM99.597 86.3133C99.8526 86.3133 99.9804 86.3133 100.078 86.3635C100.164 86.4076 100.234 86.478 100.277 86.5646C100.327 86.663 100.327 86.7919 100.327 87.0496V89.8425C100.327 90.1002 100.327 90.229 100.277 90.3275C100.234 90.4141 100.164 90.4845 100.078 90.5286C99.9804 90.5787 99.8526 90.5787 99.597 90.5787H90.8226C90.5671 90.5787 90.4393 90.5787 90.3417 90.5286C90.2558 90.4845 90.186 90.4141 90.1422 90.3275C90.0925 90.229 90.0925 90.1002 90.0925 89.8425V87.0496C90.0925 86.7919 90.0925 86.663 90.1422 86.5646C90.186 86.478 90.2558 86.4076 90.3417 86.3635C90.4393 86.3133 90.5671 86.3133 90.8226 86.3133H99.597ZM93.9055 92.8849C94.1611 92.8849 94.2889 92.8849 94.3865 92.9351C94.4723 92.9792 94.5421 93.0496 94.5859 93.1362C94.6356 93.2346 94.6356 93.3634 94.6356 93.6212V96.2637C94.6356 96.5215 94.6356 96.6503 94.5859 96.7487C94.5421 96.8353 94.4723 96.9057 94.3865 96.9498C94.2889 97 94.1611 97 93.9055 97H90.8063C90.5507 97 90.4229 97 90.3253 96.9498C90.2394 96.9057 90.1696 96.8353 90.1259 96.7487C90.0761 96.6503 90.0761 96.5215 90.0761 96.2637V93.6212C90.0761 93.3634 90.0761 93.2346 90.1259 93.1362C90.1696 93.0496 90.2394 92.9792 90.3253 92.9351C90.4229 92.8849 90.5507 92.8849 90.8063 92.8849H93.9055Z"
                    fill="white"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_192_13029"
                    x="0"
                    y="0"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="27" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.360784 0 0 0 0 0.396078 0 0 0 0 0.882353 0 0 0 1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_192_13029"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_192_13029"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_i_192_13029"
                    x="71.4153"
                    y="80"
                    width="34.5847"
                    height="17.5847"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="-0.58467" dy="0.58467" />
                    <feGaussianBlur stdDeviation="0.877006" />
                    <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                    />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.23 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_192_13029"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_192_13029"
                    x1="89"
                    y1="54"
                    x2="89"
                    y2="124"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#7C82EB" />
                    <stop offset="1" stop-color="#3A48E0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_192_13029"
                    x1="89"
                    y1="54"
                    x2="89"
                    y2="124"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0.7" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

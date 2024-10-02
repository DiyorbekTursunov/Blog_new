import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {Elements} from "shared/elements"

import styles from "./index.module.scss"

interface ILogoSmall {}

export const LogoSmall: FC<ILogoSmall> = () => {
    return (
        <a className={clsx(styles.LogoSmall)} href="/">
            <svg
                width="76"
                height="42"
                viewBox="0 0 76 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_i_192_12968)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M74.041 0C74.6727 0 74.9886 0 75.2298 0.122936C75.4421 0.231074 75.6146 0.403625 75.7228 0.615857C75.8457 0.857133 75.8457 1.17298 75.8457 1.80468V8.23664C75.8457 8.86834 75.8457 9.18419 75.7228 9.42546C75.6146 9.63769 75.4421 9.81024 75.2298 9.91838C74.9886 10.0413 74.6727 10.0413 74.041 10.0413H42.602C41.9703 10.0413 41.6545 10.0413 41.4132 9.91838C41.201 9.81024 41.0284 9.63769 40.9203 9.42546C40.7974 9.18419 40.7974 8.86834 40.7974 8.23664V1.80468C40.7974 1.17298 40.7974 0.857133 40.9203 0.615857C41.0284 0.403625 41.201 0.231074 41.4132 0.122936C41.6545 0 41.9703 0 42.602 0H74.041ZM2.74841 41.6699C2.11671 41.6699 1.80087 41.6699 1.55959 41.5469C1.34735 41.4388 1.1748 41.2662 1.06667 41.054C0.943733 40.8127 0.943733 40.4969 0.943733 39.8652V33.4332C0.943733 32.8015 0.943733 32.4857 1.06667 32.2444C1.1748 32.0322 1.34735 31.8596 1.55959 31.7515C1.80087 31.6285 2.11671 31.6285 2.74841 31.6285H34.1874C34.8191 31.6285 35.1349 31.6285 35.3762 31.7515C35.5885 31.8596 35.761 32.0322 35.8691 32.2444C35.9921 32.4857 35.9921 32.8015 35.9921 33.4332V39.8652C35.9921 40.4969 35.9921 40.8127 35.8691 41.054C35.761 41.2662 35.5885 41.4388 35.3762 41.5469C35.1349 41.6699 34.8191 41.6699 34.1874 41.6699H2.74841ZM15.2466 15.7398C14.6149 15.7398 14.2991 15.7398 14.0578 15.8627C13.8456 15.9709 13.673 16.1434 13.5649 16.3556C13.4419 16.5969 13.4419 16.9128 13.4419 17.5445V24.3903C13.4419 25.022 13.4419 25.3378 13.5649 25.5791C13.673 25.7913 13.8456 25.9639 14.0578 26.072C14.2991 26.1949 14.6149 26.1949 15.2466 26.1949H34.1841C34.8158 26.1949 35.1317 26.1949 35.373 26.072C35.5852 25.9639 35.7577 25.7913 35.8659 25.5791C35.9888 25.3378 35.9888 25.022 35.9888 24.3903V17.5445C35.9888 16.9128 35.9888 16.5969 35.8659 16.3556C35.7577 16.1434 35.5852 15.9709 35.373 15.8627C35.1317 15.7398 34.8158 15.7398 34.1841 15.7398H15.2466ZM61.5438 15.4754C62.1755 15.4754 62.4914 15.4754 62.7327 15.5984C62.9449 15.7065 63.1174 15.8791 63.2256 16.0913C63.3485 16.3326 63.3485 16.6484 63.3485 17.2801V24.1259C63.3485 24.7576 63.3485 25.0735 63.2256 25.3147C63.1174 25.527 62.9449 25.6995 62.7327 25.8077C62.4914 25.9306 62.1755 25.9306 61.5438 25.9306H42.6063C41.9746 25.9306 41.6588 25.9306 41.4175 25.8077C41.2053 25.6995 41.0327 25.527 40.9246 25.3147C40.8016 25.0735 40.8016 24.7576 40.8016 24.1259V17.2801C40.8016 16.6484 40.8016 16.3326 40.9246 16.0913C41.0327 15.8791 41.2053 15.7065 41.4175 15.5984C41.6588 15.4754 41.9746 15.4754 42.6063 15.4754H61.5438ZM27.781 1.7322e-06C27.1493 1.7322e-06 26.8335 1.7322e-06 26.5922 0.122938C26.38 0.231076 26.2074 0.403626 26.0993 0.615859C25.9764 0.857135 25.9764 1.17298 25.9764 1.80468V8.28211C25.9764 8.9138 25.9764 9.22965 26.0993 9.47093C26.2074 9.68316 26.38 9.85571 26.5922 9.96385C26.8335 10.0868 27.1493 10.0868 27.781 10.0868H34.2163C34.848 10.0868 35.1638 10.0868 35.4051 9.96385C35.6173 9.85571 35.7899 9.68316 35.898 9.47093C36.021 9.22965 36.021 8.9138 36.021 8.28211V1.80468C36.021 1.17298 36.021 0.857135 35.898 0.615859C35.7899 0.403626 35.6173 0.231076 35.4051 0.122938C35.1638 1.7322e-06 34.848 1.7322e-06 34.2163 1.7322e-06H27.781ZM49.0053 31.5831C49.637 31.5831 49.9529 31.5831 50.1942 31.706C50.4064 31.8142 50.5789 31.9867 50.6871 32.1989C50.81 32.4402 50.81 32.7561 50.81 33.3878V39.8652C50.81 40.4969 50.81 40.8127 50.6871 41.054C50.5789 41.2662 50.4064 41.4388 50.1942 41.5469C49.9529 41.6699 49.637 41.6699 49.0053 41.6699H42.5701C41.9384 41.6699 41.6226 41.6699 41.3813 41.5469C41.169 41.4388 40.9965 41.2662 40.8884 41.054C40.7654 40.8127 40.7654 40.4969 40.7654 39.8652V33.3878C40.7654 32.7561 40.7654 32.4402 40.8884 32.1989C40.9965 31.9867 41.169 31.8142 41.3813 31.706C41.6226 31.5831 41.9384 31.5831 42.5701 31.5831H49.0053Z"
                        fill="#D9D9D9"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M74.041 0C74.6727 0 74.9886 0 75.2298 0.122936C75.4421 0.231074 75.6146 0.403625 75.7228 0.615857C75.8457 0.857133 75.8457 1.17298 75.8457 1.80468V8.23664C75.8457 8.86834 75.8457 9.18419 75.7228 9.42546C75.6146 9.63769 75.4421 9.81024 75.2298 9.91838C74.9886 10.0413 74.6727 10.0413 74.041 10.0413H42.602C41.9703 10.0413 41.6545 10.0413 41.4132 9.91838C41.201 9.81024 41.0284 9.63769 40.9203 9.42546C40.7974 9.18419 40.7974 8.86834 40.7974 8.23664V1.80468C40.7974 1.17298 40.7974 0.857133 40.9203 0.615857C41.0284 0.403625 41.201 0.231074 41.4132 0.122936C41.6545 0 41.9703 0 42.602 0H74.041ZM2.74841 41.6699C2.11671 41.6699 1.80087 41.6699 1.55959 41.5469C1.34735 41.4388 1.1748 41.2662 1.06667 41.054C0.943733 40.8127 0.943733 40.4969 0.943733 39.8652V33.4332C0.943733 32.8015 0.943733 32.4857 1.06667 32.2444C1.1748 32.0322 1.34735 31.8596 1.55959 31.7515C1.80087 31.6285 2.11671 31.6285 2.74841 31.6285H34.1874C34.8191 31.6285 35.1349 31.6285 35.3762 31.7515C35.5885 31.8596 35.761 32.0322 35.8691 32.2444C35.9921 32.4857 35.9921 32.8015 35.9921 33.4332V39.8652C35.9921 40.4969 35.9921 40.8127 35.8691 41.054C35.761 41.2662 35.5885 41.4388 35.3762 41.5469C35.1349 41.6699 34.8191 41.6699 34.1874 41.6699H2.74841ZM15.2466 15.7398C14.6149 15.7398 14.2991 15.7398 14.0578 15.8627C13.8456 15.9709 13.673 16.1434 13.5649 16.3556C13.4419 16.5969 13.4419 16.9128 13.4419 17.5445V24.3903C13.4419 25.022 13.4419 25.3378 13.5649 25.5791C13.673 25.7913 13.8456 25.9639 14.0578 26.072C14.2991 26.1949 14.6149 26.1949 15.2466 26.1949H34.1841C34.8158 26.1949 35.1317 26.1949 35.373 26.072C35.5852 25.9639 35.7577 25.7913 35.8659 25.5791C35.9888 25.3378 35.9888 25.022 35.9888 24.3903V17.5445C35.9888 16.9128 35.9888 16.5969 35.8659 16.3556C35.7577 16.1434 35.5852 15.9709 35.373 15.8627C35.1317 15.7398 34.8158 15.7398 34.1841 15.7398H15.2466ZM61.5438 15.4754C62.1755 15.4754 62.4914 15.4754 62.7327 15.5984C62.9449 15.7065 63.1174 15.8791 63.2256 16.0913C63.3485 16.3326 63.3485 16.6484 63.3485 17.2801V24.1259C63.3485 24.7576 63.3485 25.0735 63.2256 25.3147C63.1174 25.527 62.9449 25.6995 62.7327 25.8077C62.4914 25.9306 62.1755 25.9306 61.5438 25.9306H42.6063C41.9746 25.9306 41.6588 25.9306 41.4175 25.8077C41.2053 25.6995 41.0327 25.527 40.9246 25.3147C40.8016 25.0735 40.8016 24.7576 40.8016 24.1259V17.2801C40.8016 16.6484 40.8016 16.3326 40.9246 16.0913C41.0327 15.8791 41.2053 15.7065 41.4175 15.5984C41.6588 15.4754 41.9746 15.4754 42.6063 15.4754H61.5438ZM27.781 1.7322e-06C27.1493 1.7322e-06 26.8335 1.7322e-06 26.5922 0.122938C26.38 0.231076 26.2074 0.403626 26.0993 0.615859C25.9764 0.857135 25.9764 1.17298 25.9764 1.80468V8.28211C25.9764 8.9138 25.9764 9.22965 26.0993 9.47093C26.2074 9.68316 26.38 9.85571 26.5922 9.96385C26.8335 10.0868 27.1493 10.0868 27.781 10.0868H34.2163C34.848 10.0868 35.1638 10.0868 35.4051 9.96385C35.6173 9.85571 35.7899 9.68316 35.898 9.47093C36.021 9.22965 36.021 8.9138 36.021 8.28211V1.80468C36.021 1.17298 36.021 0.857135 35.898 0.615859C35.7899 0.403626 35.6173 0.231076 35.4051 0.122938C35.1638 1.7322e-06 34.848 1.7322e-06 34.2163 1.7322e-06H27.781ZM49.0053 31.5831C49.637 31.5831 49.9529 31.5831 50.1942 31.706C50.4064 31.8142 50.5789 31.9867 50.6871 32.1989C50.81 32.4402 50.81 32.7561 50.81 33.3878V39.8652C50.81 40.4969 50.81 40.8127 50.6871 41.054C50.5789 41.2662 50.4064 41.4388 50.1942 41.5469C49.9529 41.6699 49.637 41.6699 49.0053 41.6699H42.5701C41.9384 41.6699 41.6226 41.6699 41.3813 41.5469C41.169 41.4388 40.9965 41.2662 40.8884 41.054C40.7654 40.8127 40.7654 40.4969 40.7654 39.8652V33.3878C40.7654 32.7561 40.7654 32.4402 40.8884 32.1989C40.9965 31.9867 41.169 31.8142 41.3813 31.706C41.6226 31.5831 41.9384 31.5831 42.5701 31.5831H49.0053Z"
                        fill="url(#paint0_linear_192_12968)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_i_192_12968"
                        x="-0.338913"
                        y="0"
                        width="76.1846"
                        height="42.9522"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
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
                        <feOffset dx="-1.28227" dy="1.28227" />
                        <feGaussianBlur stdDeviation="1.92341" />
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
                            result="effect1_innerShadow_192_12968"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_192_12968"
                        x1="-9.22354"
                        y1="7.68553"
                        x2="8.97819"
                        y2="54.279"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#E0F4FF" />
                        <stop offset="1" stop-color="#207ED5" />
                    </linearGradient>
                </defs>
            </svg>
        </a>
    )
}

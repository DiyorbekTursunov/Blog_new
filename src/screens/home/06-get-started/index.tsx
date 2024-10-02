import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {SectionTitle} from "shared/components/@section/section-title"
import {Logo} from "shared/components/logo"

import styles from "./index.module.scss"

interface IGetStarted {}

export const GetStarted: FC<IGetStarted> = () => {
    return (
        <div className={clsx(styles.GetStarted)}>
            <div className={clsx(styles.GetStarted_bg)}>
                <Image
                    src={"/assets/home/06-get-started/bg.avif"}
                    width={1500}
                    height={1500}
                    quality={100}
                    alt="app-bg"
                />
            </div>
            <SectionTitle className={clsx(styles.GetStarted_title)}>
                Get started today with <Logo.small /> FXIFY{" "}
            </SectionTitle>
            <div className={clsx(styles.GetStarted_text)}>
                Sign up, select your desired challenge account and Get Funded
            </div>

            <div className={clsx(styles.GetStarted_app)}>
                <div className={clsx(styles.GetStarted_app_light)}>
                    <Image
                        src={"/assets/home/06-get-started/light-6.avif"}
                        width={1000}
                        height={1000}
                        quality={100}
                        alt="app-light"
                    />
                </div>
                <div className={clsx(styles.GetStarted_app_card)}>
                    <Image
                        className={clsx(styles.GetStarted_app_img)}
                        src={"/assets/home/06-get-started/app.avif"}
                        width={1500}
                        height={1500}
                        quality={100}
                        alt="app"
                    />
                </div>
            </div>
        </div>
    )
}

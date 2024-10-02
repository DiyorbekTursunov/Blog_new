import clsx from "clsx"
import {FC} from "react"

import {Section} from "shared/components/@section"

import styles from "./index.module.scss"
import {GridItem} from "./ui/grid-item"

interface IPlatforms {}

export const Platforms: FC<IPlatforms> = () => {
    return (
        <div className={clsx(styles.Platforms)}>
            <div className={clsx(styles.Platforms_content)}>
                <div className={clsx(styles.Platforms_info)}>
                    <Section.Label>Platforms</Section.Label>
                    <Section.Title className={clsx(styles.Platforms_title)}>
                        Platforms we work with
                    </Section.Title>
                    <div className={clsx(styles.Platforms_text)}>
                        We work with variety of trading platforms. Choose the
                        one that suits best for you. If you aren't sure which
                        one is it, please watch our Comparison of Trading
                        Platforms video
                    </div>
                </div>
                <div className={clsx(styles.Platforms_grid)}>
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/niniatrader.avif" />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/sierra.avif" />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/tradovate.avif" />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/r-trader.avif" />
                    <GridItem />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/quantower.avif" />
                    <GridItem />
                    <GridItem logo="/assets/home/07-platforms/logos/trading-view.avif" />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                </div>
            </div>
        </div>
    )
}

import clsx from "clsx"
import {FC} from "react"

import {Button} from "shared/components/@button/button"
import {Section} from "shared/components/@section"
import {Accordion} from "shared/components/accordion"
import {Icons} from "shared/icons"

import {dataAnswers} from "./data/dataAnswers"
import styles from "./index.module.scss"

interface IAnswers {}

export const Answers: FC<IAnswers> = () => {
    return (
        <div className={clsx(styles.Answers)}>
            <div className={clsx(styles.Answers_info)}>
                <Section.Title className={clsx(styles.Answers_title)}>
                    Answers to the <br /> most popular questions
                </Section.Title>
                <div className={clsx(styles.Answers_text)}>
                    <span>
                        Did not find the answer you were looking for? More
                        questions and answers on our
                    </span>{" "}
                    <a href="/faq">FAQ page</a>
                </div>
                <Button className={clsx(styles.Answers_btn)} style="purple">
                    View all <Icons.Arrow />
                </Button>
            </div>
            <div className={clsx(styles.Answers_list)}>
                {dataAnswers.map((e, i) => (
                    <Accordion {...e} key={i} />
                ))}
            </div>
        </div>
    )
}

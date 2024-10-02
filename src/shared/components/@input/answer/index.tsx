"use client"

import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, useEffect, useRef, useState} from "react"

import {IInput} from "../lib/types"

import styles from "./index.module.scss"
import {AnswerItem} from "./ui/answer-item"

interface IAnswer
    extends Omit<ComponentPropsWithoutRef<"input">, "name">,
        IInput {
    answers?: string[]
    resetState?: boolean
}

export const Answer: FC<IAnswer> = ({
    answers = ["no", "yes"],
    resetState,
    title,
    errorMessage,
    className,
    required,
    ...restProps
}) => {
    const [error, setError] = useState<string | null>(null)
    const [active, setActive] = useState<string | null>(null)

    const refInput = useRef<HTMLInputElement>(null)

    const err = errorMessage || "Please select an answer"

    const setErrorMass = () => {
        setError(err)
    }

    const cleanError = () => {
        setError(null)
    }

    useEffect(() => {
        setActive(null)
        if (refInput.current) refInput.current.value = ""
    }, [resetState])

    return (
        <div className={clsx(styles.Answer)}>
            {(title || error) && (
                <label className={clsx(styles.Answer_title)}>
                    <div>
                        {title}
                        {required && title && <span>*</span>}
                    </div>

                    {error && <span> {error}</span>}
                </label>
            )}
            <input
                className={clsx(
                    styles.Answer_input,
                    className,
                    error && styles.error,
                )}
                type={"text"}
                onChange={(e) => {
                    cleanError()
                }}
                onBlur={(e) => {
                    if (
                        restProps.value === "" ||
                        e.currentTarget.value === ""
                    ) {
                        setErrorMass()
                    }
                }}
                onSubmit={() => false}
                onInvalid={(e) => {
                    setErrorMass()
                    e.currentTarget.setCustomValidity("")
                }}
                required={required}
                {...restProps}
                ref={refInput}
            />
            <div className={clsx(styles.Answer_list)}>
                {answers.map((e, i) => (
                    <AnswerItem
                        title={e}
                        isActive={active == e}
                        onChange={() => {
                            if (refInput.current) {
                                if (refInput.current.value == e) {
                                    setActive(null)
                                    setErrorMass()
                                    refInput.current.value = ""
                                } else {
                                    setActive(e)
                                    cleanError()
                                    refInput.current.value = e
                                }
                            }
                        }}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

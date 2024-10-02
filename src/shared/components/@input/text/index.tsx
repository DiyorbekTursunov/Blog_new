"use client"

import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, useState} from "react"

import {IInput} from "../lib/types"

import styles from "./index.module.scss"

interface IText
    extends Omit<ComponentPropsWithoutRef<"input">, "name">,
        IInput {}

export const Text: FC<IText> = ({
    title,
    errorMessage,
    className,
    required,
    placeholder = "Type here...",
    ...restProps
}) => {
    const [error, setError] = useState<string | null>(null)

    const err = errorMessage || "Please fill this field"

    const setErrorMass = () => {
        setError(err)
    }

    const cleanError = () => {
        setError(null)
    }

    return (
        <div className={clsx(styles.Text)}>
            {(title || error) && (
                <label className={clsx(styles.Text_title)}>
                    <div>
                        {title}
                        {required && title && <span>*</span>}
                    </div>

                    {error && <span> {error}</span>}
                </label>
            )}
            <input
                className={clsx(
                    styles.Text_input,
                    className,
                    error && styles.error,
                )}
                type={"text"}
                pattern={
                    restProps.type == "email"
                        ? "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
                        : restProps.type === "number"
                          ? "[0-9]*"
                          : undefined
                }
                onChange={(e) => {
                    cleanError()
                }}
                onBlur={(e) => {
                    if (restProps.type === "email") {
                        if (
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
                                (restProps.value ||
                                    e.currentTarget.value) as string,
                            ) === false
                        ) {
                            required && setErrorMass()
                        }
                    } else {
                        if (
                            restProps.value === "" ||
                            e.currentTarget.value === ""
                        ) {
                            required && setErrorMass()
                        }
                    }
                }}
                inputMode={restProps.type === "number" ? "numeric" : undefined}
                onSubmit={() => false}
                onInvalid={(e) => {
                    required && setErrorMass()
                    e.currentTarget.setCustomValidity("")
                }}
                placeholder={placeholder}
                required={required}
                {...restProps}
            />
        </div>
    )
}

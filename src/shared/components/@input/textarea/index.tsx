"use client"

import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, useState} from "react"

import {IInput} from "../lib/types"

import styles from "./index.module.scss"

interface ITextarea
    extends Omit<ComponentPropsWithoutRef<"textarea">, "name">,
        IInput {}

export const Textarea: FC<ITextarea> = ({
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
        <div className={clsx(styles.Textarea)}>
            {(title || error) && (
                <label className={clsx(styles.Textarea_title)}>
                    <div>
                        {title}
                        {required && title && <span>*</span>}
                    </div>

                    {error && <span> {error}</span>}
                </label>
            )}
            <textarea
                className={clsx(
                    styles.Textarea_input,
                    className,
                    error && styles.error,
                )}
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
                placeholder={placeholder}
                required={required}
                
                {...restProps}
            />
        </div>
    )
}

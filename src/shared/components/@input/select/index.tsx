import {useClickAway} from "@uidotdev/usehooks"
import clsx from "clsx"
import gsap from "gsap"
import {
    ComponentPropsWithoutRef,
    FC,
    InputHTMLAttributes,
    MutableRefObject,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"
import {createPortal} from "react-dom"

import {Icons} from "shared/icons"

import {IInput} from "../lib/types"

import styles from "./index.module.scss"

export type SelectItem = {title: string; value: string}

export interface ISelectProps
    extends Omit<ComponentPropsWithoutRef<"input">, "name">,
        IInput {
    items?: string[]
}

export const Select: FC<ISelectProps> = ({
    title,
    errorMessage,
    items,
    required,
    placeholder = "Select option",
    ...restProps
}) => {
    const [error, setError] = useState<string | null>(null)

    const err = errorMessage || "Please select an option"

    const setErrorMass = () => {
        setError(err)
    }

    const cleanError = () => {
        setError(null)
    }

    const [searchValue, setSearchValue] = useState<string>("")
    const [selectValue, setSelectValue] = useState<string>("")

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isAnimation, setAnimation] = useState<boolean>(false)
    const [isMounted, setMounted] = useState<boolean>(false)

    const refSelect = useRef<HTMLDivElement>(null)
    const refInput = useRef<HTMLInputElement>(null)
    const refInputView = useRef<HTMLInputElement>(null)

    const itemsSearch = useMemo(() => {
        return items
            ? items.filter((item) =>
                  item.toLowerCase().includes(searchValue.toLowerCase()),
              )
            : []
    }, [searchValue])

    const refClick: MutableRefObject<Element | null> = useClickAway(() => {
        // setIsOpen(false)
    })

    const handleOpen = () => {
        if (!isAnimation) {
            setIsOpen((prev) => !prev)
        }
    }

    const animSelect = (isOpen: boolean) => {
        if (isOpen) {
            gsap.fromTo(
                refSelect.current,
                {autoAlpha: 0, y: 10},
                {
                    duration: 0.5,
                    autoAlpha: 1,
                    y: 0,
                    onStart: () => {
                        setAnimation(true)
                        setSearchValue("")
                    },
                    onComplete: () => {
                        setAnimation(false)
                    },
                },
            )
        } else {
            gsap.to(refSelect.current, {
                duration: 0.5,
                autoAlpha: 0,
                y: 10,
                onStart: () => {
                    setAnimation(true)
                },
                onComplete: () => {
                    setAnimation(false)
                    setSearchValue("")
                },
            })
        }
    }

    useEffect(() => {
        animSelect(isOpen)
    }, [isOpen])

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {}, [selectValue])

    return (
        <div
            className={clsx(
                "input-select",
                styles.Select,
                error && styles.error,
            )}
            ref={(ref) => {
                if (ref) refClick.current = ref
            }}
        >
            {(title || error) && (
                <label className={clsx(styles.Select_title)}>
                    <div>
                        {title}
                        {required && title && <span>*</span>}
                    </div>

                    {error && <span> {error}</span>}
                </label>
            )}
            <input
                className={clsx(styles.Select_inputHide)}
                {...restProps}
                ref={refInput}
                required={required}
                onChange={(e) => {
                    cleanError()
                }}
                onInvalid={(e) => {
                    setErrorMass()
                    e.currentTarget.setCustomValidity("Select a valid option")
                }}
            />
            <div className={clsx(styles.Select_header)}>
                <div className={clsx(styles.Select_header_title)}>
                    <input
                        className={clsx(styles.Select_header_title_text)}
                        type="text"
                        onChange={(e) => {
                            const value = e.target.value

                            setSearchValue(e.target.value)

                            if (value != selectValue) {
                                setSelectValue("")
                                if (refInput.current)
                                    refInput.current.value = ""
                            }
                        }}
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => {
                            setIsOpen(false)
                        }}
                        placeholder={placeholder}
                        ref={refInputView}
                    />
                </div>
                <div
                    className={clsx(
                        styles.Select_header_icon,
                        isOpen && styles.active,
                    )}
                >
                    <Icons.Arrow.Nav />
                </div>
            </div>

            {isMounted &&
                createPortal(
                    <div className={clsx(styles.Select_menu)} ref={refSelect}>
                        <div className={clsx(styles.Select_menu_inner)}>
                            {itemsSearch.map((e, i) => (
                                <div
                                    className={clsx(
                                        styles.Select_menu_item,
                                        e === selectValue && styles.active,
                                    )}
                                    onClick={() => {
                                        handleOpen()
                                        setSelectValue(e)

                                        cleanError()
                                        if (refInputView.current)
                                            refInputView.current.value = e

                                        setTimeout(() => {
                                            if (refInput.current)
                                                refInput.current.value = e
                                        }, 200)
                                    }}
                                    key={i}
                                >
                                    {e}
                                </div>
                            ))}
                        </div>
                    </div>,
                    refClick.current ? refClick.current : document.body,
                )}
        </div>
    )
}

"use client"

import gsap from "gsap"
import {createContext, useContext, useEffect} from "react"

import {IModal, useModal} from "@/hooks/useModal"

interface IMainContext {
    modalMenu: IModal
}

export const MainContext = createContext<IMainContext>({} as any)

export const useMainContext = () => useContext(MainContext)

interface Props {
    children: React.ReactNode
}

export const WithMain: React.FC<Props> = ({children}) => {
    const modalMenu = useModal()

    useEffect(() => {
        const selects = gsap.utils.toArray(".input-select") as HTMLDivElement[]

        selects.map((e, i) => {
            e.style.zIndex = (selects.length - i).toString()
        })
    }, [])

    return (
        <MainContext.Provider
            value={{
                modalMenu,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

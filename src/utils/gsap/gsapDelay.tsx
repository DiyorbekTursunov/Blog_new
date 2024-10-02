import gsap from "gsap"

export const gsapDelay = (func: Function, time?: number) => {
    gsap.delayedCall(time || 0.1, func)
}

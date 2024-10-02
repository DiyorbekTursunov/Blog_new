import gsap from "gsap"

export const revealAnimation = (
    element: any,
    opacity?: number,
    params?: {
        from?: gsap.TweenVars
        to?: gsap.TweenVars
    },
    startPercent?: number,
) => {
    let tl: gsap.core.Timeline

    tl = gsap
        .timeline({
            paused: true,
            defaults: {
                ease: "power2.inOut",
                duration: 1,
            },
        })
        .fromTo(
            element,
            {opacity: 0, ...params?.from},
            {
                opacity: opacity || 1,
                ...params?.to,
            },
        )

    gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: `top top+=${startPercent || 80}%`,
            // markers: true,
            onLeaveBack() {
                tl.reverse()
            },
            onEnter() {
                tl.play()
            },
        },
    })
}

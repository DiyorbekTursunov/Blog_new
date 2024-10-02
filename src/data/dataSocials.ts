import {ISocial} from "interfaces/global"

import {Icons} from "shared/icons"

const SOCIALS_KEYS = ["discord"] as const

export type SocialKey = (typeof SOCIALS_KEYS)[number]

export type IDataSocials = {
    [key in SocialKey]: ISocial
}

export const dataSocials: IDataSocials = {
    discord: {
        Icon: Icons.Socials.Discord,
        text: "Discord",
        href: "#",
    },
}

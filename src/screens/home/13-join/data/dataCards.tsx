import {Button} from "shared/components/@button/button"
import {Icons} from "shared/icons"

import {ICard} from "../ui/card"

export const dataCards: ICard[] = [
    {
        bg: "/assets/home/13-join/mail.webp",
        title: "Subscribe to our newsletter",
        text: "Be the first to know about promotions and discounts",
        action: (
            <Button style="purple">
                Join FXIFY Telegram <Icons.Arrow />
            </Button>
        ),
    },
    {
        bg: "/assets/home/13-join/telegram.webp",
        title: "Follow us on Telegram Channel",
        text: "Get an insight from other users about FXIFY and their experience",
        action: (
            <Button style="purple">
                Join FXIFY Telegram <Icons.Arrow />
            </Button>
        ),
    },
    {
        bg: "/assets/home/13-join/discord.webp",
        title: "Join Our Discord Community",
        text: "Get an insight from other users about FXIFY and their experience",
        action: (
            <Button style="purple">
                Join FXIFY Discord <Icons.Arrow />
            </Button>
        ),
    },
]

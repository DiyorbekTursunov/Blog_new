import {ICard} from "../ui/card"

export const dataCards: ICard[] = [
    {
        type: "info",
        list: [
            "Profit Target",
            "Daily Loss Limit",
            "Trailing Max Drawdown",
            "Activation Fee",
            "Scaling Rule",
            "Capped Withdrawals",
            "Minimum Trading Days",
        ],
    },
    {
        type: "card",
        active: true,
        title: "When you trade with FXIFY",
        list: [
            "6-8%",
            "—",
            "3-4%",
            "Starter Only",
            "Starter Only",
            "Starter Only, 60 days",
            "1 day",
        ],
    },
    {
        type: "card",
        title: "When you trade with Others",
        list: [
            "$9,000",
            "2%",
            "3-4%",
            true,
            true,
            "120 days & 3 payouts",
            "2 days",
        ],
    },
]

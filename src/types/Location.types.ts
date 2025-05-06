import { JSX } from "react"

export type LocationNames = "woodlands" | "wildlands" | "wilderness" | "mine" | "home" | "river"

export type LocationType = {
    title: string,
    buttons:
    {
        title: string,
        active: boolean,
        action: string
    }[]
}

export type LocationElement = JSX.Element
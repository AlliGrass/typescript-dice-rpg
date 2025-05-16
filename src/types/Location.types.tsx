import { JSX } from "react"
import Woodlands from "../components/locations/Woodlands"
import Wildlands from "../components/locations/Wildlands"
import Wilderness from "../components/locations/Wilderness"
import Mine from "../components/locations/Mine"
import Home from "../components/locations/Home"
import River from "../components/locations/River"

export type LocationNameType = "woodlands" | "wildlands" | "wilderness" | "mine" | "home" | "river"

export type LocationType = {
    title: string,
    buttons:
    {
        title: string,
        active: boolean,
        action: string,
        requirement?: {
            type: string,
            require: string
        },
        variable?: any[],
    }[]
}



export type LocationElement = JSX.Element

export const PageLocations: Record<LocationNameType, LocationElement> = {
    woodlands: <Woodlands/>,
    wildlands: <Wildlands/>,
    wilderness: <Wilderness/>,
    mine: <Mine/>,
    home: <Home/>,
    river: <River/>
}
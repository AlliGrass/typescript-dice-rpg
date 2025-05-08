import { LocationType, LocationNameType } from "./Location.types"
import { MaterialType } from "./Resources.types"


type DefaultLocationType = Record<LocationNameType, LocationType>

type ClassNames = "standard"

type ClassType = {
    classTitle: string,
    health: number,
    strength: number,
}

type DefaultClassType = Record<ClassNames, ClassType> 

// type DefaultClassNotationType = Record<ClassNames, >

export type DefaultContextType = {
    initial: {
        page: {
            locations: DefaultLocationType
        },
        player: {
            classes: DefaultClassType,

        }, 
        // enemy: {
        //     type: {
        //         health: number,
        //         strength: number,
        //     }
        // },
    },
    base: {
        materials: MaterialType
    },
    notation: {
        // attack: {

        // },
        // skills: {

        // },
        classes: DefaultClassType
    }
}
import { LocationType, LocationNames } from "./Location.types"


type DefaultLocationType = Record<LocationNames, LocationType>

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
            classes: DefaultClassType   
        }, 
        // enemy: {
        //     type: {
        //         health: number,
        //         strength: number,
        //     }
        // },
    },
    base: {
        toHit: number,
    },
    notation: {
        // attack: {

        // },
        // skills: {

        // },
        classes: DefaultClassType
    }
}
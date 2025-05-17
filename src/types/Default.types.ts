import { LocationType, LocationNameType } from "./Location.types"
import { MaterialType } from "./Resource.types"


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
    items: {
        resources: {
            // materials?
            [key:string]: any
        },
        tools: {
            [key: string]: any
            stoneAxe: {
                title: string,
                type: string
                crafting: {
                    isCraftable: boolean,
                    requiredItems: {
                        [key: string]: number
                    },
                    craftingStation: boolean,
                }
            }
            stonePickaxe: {
                title: string,
                type: string,
                crafting: {
                    isCraftable: boolean,
                    requiredItems: {
                        [key: string]: number
                    },
                    craftingStation: boolean,
                }
            }
        },
    },
    structures: {
        home: {
            fire: {
                title: string,
                requiredItems: {
                    [key: string]: number
                }
            },
            firePit: {
                title: string,
                requiredItems: {
                    [key: string]: number
                }
            },
        },
    }


    // base: {
    //     materials: MaterialType
    // },
    // notation: {
    //     // attack: {

    //     // },
    //     // skills: {

    //     // },
    //     classes: DefaultClassType
    // }
}
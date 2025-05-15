type MaterialNameType = "stick" | "wood" | "stone" | "coal" | "copper" | "tin" | "bronze" | "iron" | "cobalt" | "tungsten" | "diamond"

type MaterialValueType = number

// type MaterialType = Record<MaterialNameType, MaterialValueType>

type WoodType = {
    pine: number,
    oak: number,
    walnut: number,
    ash: number
}

type MineralOreType = {
    copper: number,
    tin: number,
    iron: number,
    cobalt: number,
    tungsten: number
    // diamond: number
}

type MineralIngotType = {
    copper: number,
    bronze: number,
    iron: number,
    tungsten: number
}

export type MaterialType = {
    wood: {
        stick: number
        log: WoodType,
        plank: WoodType
    },
    mineral: {
        stone: number,
        coal: number,
        ore: MineralOreType,
        ingot: MineralIngotType,
    },
    forage: {
        clay: number,
        straw: number
    }
}
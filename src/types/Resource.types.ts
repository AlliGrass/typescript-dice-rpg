type MaterialNameType = "stick" | "wood" | "stone" | "coal" | "copper" | "tin" | "bronze" | "iron" | "cobalt" | "tungsten" | "diamond"

type MaterialValueType = number

export type MaterialType = Record<MaterialNameType, MaterialValueType>

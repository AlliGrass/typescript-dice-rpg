import { produce } from "immer";
import { create } from "zustand";
import { MaterialType } from "../types/Resource.types";


type InventoryType = {
    material: MaterialType, 
    tool: string[]
    item: string[],
    equipped: {
        helmet: string,
        clothes: string,
        shoes: string,
    },
}

export type PlayerState = {
    level: number,
    exp: number,
    healthMax: number,
    healthCurrent: number,
    strength: number,
    inventory: InventoryType,
    structuralUnlocks: {
        home: {
            [key: string]: boolean
        },
        dock: {
            [key: string]: boolean
        }
    },
    updateHealth: () => void,
    inventoryUpdateMaterial: (material: string, amount: number) => void,
    inventoryAddDebugTestMaterials: () => void,
    inventoryAddDebugTestItems: () => void,
    // addItem: (addedItem: string, materialCost: [key:string]) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
    level: 1,
    exp: 0,
    healthMax: 10,
    healthCurrent: 10,
    strength: 1, 
    inventory: {
        material: {
            wood: {
                stick: 0,
                log: {
                    pine: 0,
                    oak: 0,
                    walnut: 0,
                    ash: 0
                },
                plank: {
                    pine: 0,
                    oak: 0,
                    walnut: 0,
                    ash: 0
                }
            },
            mineral: {
                stone: 0,
                coal: 0,
                ore: {
                    copper: 0,
                    tin: 0,
                    iron: 0,
                    cobalt: 0,
                    tungsten: 0
                },
                ingot: {
                    copper: 0,
                    bronze: 0,
                    iron: 0,
                    tungsten: 0
                }
            },
            forage: {
                clay: 0,
                straw: 0
            }

        }, 
        tool: [],
        item: [],
        equipped: {
            helmet: "",
            clothes: "",
            shoes: "",
        },
    },
    structuralUnlocks: {
        home: {
            firePit: false,
            craftingBench: false,
            furnace: false,
        },
        dock: {

        }
    },
    updateHealth: () => set(produce(profile => { profile.healthCurrent -= 1})),
    inventoryUpdateMaterial: (material, amount) => set(produce(profile => { profile.inventory.materials[material] += amount})),
    inventoryAddDebugTestMaterials: () => set(produce(profile => {profile.inventory.materials = {stick: 3, wood: 0, stone: 2}})),
    inventoryAddDebugTestItems: () => set(produce(profile => {profile.inventory.tool = ["stoneAxe", "stonePickaxe"]})),
    // addItem: (addedItem, materialCost) => {

    //     Object.entries(materialCost).map((material, amount) => {
    //         return set(produce(profile => {profile.inventory.materials[material] -= amount}))
    //     })
        
    //     set(produce(profile => {profile.inventory.tool.push(addedItem)}))
        
    // }
}))


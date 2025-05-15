import { produce } from "immer";
import { create } from "zustand";
import { MaterialType } from "../types/Resource.types";


type InventoryType = {
    materials: MaterialType, 
    tool: string[]
    items: string[],
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
    addItem: (addedItem: string, materialCost: [key:string]) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
    level: 1,
    exp: 0,
    healthMax: 10,
    healthCurrent: 10,
    strength: 1, 
    inventory: {
        materials: {
            stick: 0,
            wood: 0,
            stone: 0,
        }, 
        tool: [],
        items: [],
        equipped: {
            helmet: "",
            clothes: "",
            shoes: "",
        },
    },
    structuralUnlocks: {
        home: {
            firePit: false,
            craftingBench: false
        },
        dock: {

        }
    },
    updateHealth: () => set(produce(profile => { profile.healthCurrent -= 1})),
    inventoryUpdateMaterial: (material, amount) => set(produce(profile => { profile.inventory.materials[material] += amount})),
    inventoryAddDebugTestMaterials: () => set(produce(profile => {profile.inventory.materials = {stick: 3, wood: 0, stone: 2}})),
    inventoryAddDebugTestItems: () => set(produce(profile => {profile.inventory.tool = ["stoneAxe", "stonePickaxe"]})),
    addItem: (addedItem, materialCost) => {


        Object.entries(materialCost).map((material, amount) => {
            return set(produce(profile => {profile.inventory.materials[material] -= amount}))
        })
        
        set(produce(profile => {profile.inventory.tool.push(addedItem)}))
        
    }
}))


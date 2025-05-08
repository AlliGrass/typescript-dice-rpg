import { produce } from "immer";
import { create } from "zustand";
import { MaterialType } from "../types/Resources.types";


type InventoryType = {
    materials: MaterialType, 
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
    updateHealth: () => void,
    gatherMaterial: (material: string, amount: number) => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
    level: 1,
    exp: 0,
    healthMax: 10,
    healthCurrent: 10,
    strength: 1, 
    inventory: {
        materials: {
            sticks: 0,
            wood: 0,
            stone: 0,
        }, 
        items: [],
        equipped: {
            helmet: "",
            clothes: "",
            shoes: "",
        },
    },
    updateHealth: () => set(produce(profile => { profile.healthCurrent -= 1})),
    gatherMaterial: (material, amount) => set(produce(profile => { profile.inventory.materials[material] += amount}))
}))


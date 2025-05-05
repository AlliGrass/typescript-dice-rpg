import { produce } from "immer";
import { create } from "zustand";

type MaterialsType = {
    wood: number,
    stone: number,
}

type InventoryType = {
    materials: MaterialsType, 
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
    gatherMaterial: () => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
    level: 1,
    exp: 0,
    healthMax: 10,
    healthCurrent: 10,
    strength: 1, 
    inventory: {
        materials: {
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
    gatherMaterial: () => set(produce(profile => { profile.inventory.materials.wood += 1}))
}))


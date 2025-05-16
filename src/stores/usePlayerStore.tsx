import { produce } from "immer";
import { create } from "zustand";



export type PlayerState = {
    level: number,
    exp: number,
    healthMax: number,
    healthCurrent: number,
    strength: number,
    structuralUnlocks: {
        home: {
            [key: string]: boolean
        },
        dock: {
            [key: string]: boolean
        }
    },
    updateHealth: () => void,

}

export const usePlayerStore = create<PlayerState>((set) => ({
    level: 1,
    exp: 0,
    healthMax: 10,
    healthCurrent: 10,
    strength: 1, 
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
}))



import { produce } from "immer"
import { createContext,  ReactNode, useContext, useState } from "react"

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

type PlayerContextType = {
    level: number,
    exp: number,
    healthMax: number,
    healthCurrent: number,
    strength: number,
    inventory: InventoryType,
    updateHealth: (newHealth: number) => void,
    gatherMaterial: (material: keyof MaterialsType, amount: number) => void,
}

const PlayerContext = createContext<PlayerContextType>({
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
    updateHealth: () => {},
    gatherMaterial: () => {},
})

export const PlayerProvider = ({ children }: {children: ReactNode}) => {
    
    const [playerState, setPlayerState] = useState({
        level: 1,
        exp: 0,
        healthMax: 10,
        healthCurrent: 10,
        strength: 1, 
        inventory: {
            materials: {
                wood: 3,
                stone: 0,
            }, 
            items: [],
            equipped: {
                helmet: "",
                clothes: "",
                shoes: "",
            },
        },
    })
    
    const updateHealth = (newHealth: number) => {
        setPlayerState(prev => ({
            ...prev, 
            healthCurrent: newHealth
        }))
    }

    const gatherMaterial = ( material: keyof MaterialsType, amount: number) => {
        setPlayerState(produce(profile => {
            profile.inventory.materials[material] += amount
        }))
    }

    return (
        <PlayerContext.Provider value={{...playerState, updateHealth, gatherMaterial}}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext)
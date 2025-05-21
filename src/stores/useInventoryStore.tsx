import { create } from "zustand"
import { MaterialType } from "../types/Resource.types";
import { produce } from "immer";

type InventoryState = {
    material: MaterialType, 
    tool: any, // to be explicitly stated
    item: string[],
    equipped: {
        helmet: string,
        clothes: string,
        shoes: string,
    },
    inventoryUpdateMaterial: (resource: string, path: string[], amount: number) => void,
    inventoryAddItem: (addedItem: {[key: string]: any}, materialCost: {[key: string]: {path: string[], amount: number}}) => void,
    getToolDropRate: (toolType: string) => void,
    inventoryAddDebugTestItems: () => void
}

export const useInventoryStore = create<InventoryState>((set) => ({
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
    tool: {
        // stoneAxe: {
        //  condition: "",
        //  durability: num
        // }
    }, 
    item: [],
    equipped: {
        helmet: "",
        clothes: "",
        shoes: "",
    },
    inventoryUpdateMaterial: (resource, path, amount) => {
        set(produce((inventory) => {
            let currentPath: any = inventory
            for (const nextPosition of path) {
                currentPath = currentPath[nextPosition]   
            }
            currentPath[resource] = (currentPath[resource] || 0) + amount
        }))
    },
    inventoryAddItem: (addedItem, materialCost) => { 
        Object.entries(materialCost).forEach(([material, properties]) => {
            return set(produce((inventory) => {
                let currentPath: any = inventory
                for (const nextPosition of properties.path) currentPath = currentPath[nextPosition]
                currentPath[material] -= properties.amount
            }))
        })
        set(produce(inventory => {Object.assign(inventory.tool, addedItem)})) // hardcoded as tool
    },
    getToolDropRate: (toolType) => {

    },
    inventoryAddDebugTestItems: () => {
        set(produce((inventory) => {
            inventory.tool.stonePickaxe = {condition: "Pristine", durability: 100}
            inventory.tool.stoneAxe = {condition: "Pristine", durability: 100}

        }))
    }


}))
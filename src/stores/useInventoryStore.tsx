import { create } from "zustand"
import { MaterialType } from "../types/Resource.types";
import { produce } from "immer";

type InventoryState = {
    material: MaterialType, 
    tool: any, // to be explicitly stated
    structure: any,
    item: string[],
    equipped: {
        helmet: string,
        clothes: string,
        shoes: string,
    },
    inventoryUpdateMaterial: (resource: string, path: string[], amount: number) => void,
    inventoryAddItem: (toolType: string, itemDetails: {[key: string]: any}, materialCost: {[key: string]: {path: string[], amount: number}}) => void,
    inventoryUpgradeStructure: (upgradedStructure: string, upgradedStructureTitle: string) => void,
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
        axe: {
            tier: 0,
        },
        container: {
            tier: 0,
        },
        pickaxe: {
            tier: 0,
        }
        // stoneAxe: {
        //  condition: "",
        //  durability: num
        // }
    }, 
    structure: {
        dock: {

        },
        home: {
            title: "",
            tier: 0
        }, // crafting bench || furnace
        crafting: {
            title: "",
            tier: 0
        },
        furnace: {
            title: "",
            tier: 0
        }
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
            currentPath[resource] = (currentPath[resource]) + amount
        }))
    },
    inventoryAddItem: (toolType, itemDetails, materialCost) => { 
        
        Object.entries(materialCost).forEach(([material, properties]) => { // inventory update material in negative
            return set(produce((inventory) => {
                let currentPath: any = inventory
                for (const nextPosition of properties.path) currentPath = currentPath[nextPosition]
                currentPath[material] -= properties.amount
            }))
        })
        set(produce(inventory => { // hardcoded as tool
            inventory.tool[toolType].title = itemDetails.title
            inventory.tool[toolType].tier += 1
            inventory.tool[toolType].properties = itemDetails.properties
        }))

        // set(produce(inventory => {Object.assign(inventory.tool, addedItem)})) // hardcoded as tool
    },
    inventoryUpgradeStructure: (upgradedStructure, upgradedStructureTitle) => {
        set(produce(inventory => {
            inventory.structure[upgradedStructure].title = upgradedStructureTitle
            inventory.structure[upgradedStructure].tier += 1
        }))
    },
    inventoryAddDebugTestItems: () => {
        set(produce((inventory) => {
            inventory.material.wood.stick = 10
            inventory.material.mineral.stone = 10
            inventory.material.wood.log.pine = 10
            inventory.material.mineral.ingot.copper = 10
        }))
    }
}))
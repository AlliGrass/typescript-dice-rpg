import { useMemo, useState } from "react"
import { useDefaults } from "../contexts/DefaultsContext"
import { useInventoryStore } from "../stores/useInventoryStore"

const CraftingWindow = () => {

    const {items: { resources, tools } } = useDefaults()

    const allResources = { //util
        ...resources.naturalMaterials,
        ...resources.craftedMaterials
    }

    const inventory = useInventoryStore()
    const { inventoryAddItem } = useInventoryStore()

    const addItemFunction = (toolType: string, itemDetails: Object) => {

     
        // const { crafting, ...toolDetails} = tools[itemID]
        // const itemAdded = {
        //     [itemID]: toolDetails
        // }

        // // title: "",
        // //     tier: 0,
        // //     condition: "",
        // //     durability: 0
        console.log(itemDetails)

        const materialCost = Object.assign({}, ...Object.entries(itemDetails.crafting.requiredMaterial).map(([material, amount]) => {
            return {
                [material]: {
                    path: allResources[material].path,
                    amount: amount
                }
            }
        }))
        inventoryAddItem(toolType, itemDetails, materialCost)
    }

    const getMaterialAmount = (resource: string): number => {

        const path = allResources[resource].path
        // console.log(path)
        let currentPath: any = inventory
        for (const nextPosition of path) {
            currentPath = currentPath[nextPosition]
        }
        return currentPath[allResources[resource].itemKey]
    }

    const getUnlocked = (type: any, required: any): boolean => {

        console.log(type)
        console.log(required)
        if (type === "tool") console.log(inventory[type])
        if (type !== "tool") console.log(inventory.structure[type])
        const result = type === "tool" ? Object.keys(inventory[type]).includes(required) : inventory.structure[type].tier >= required

        return result
    }




    return (
        <div>
            <h1>Crafting Tools</h1>
            <div style={{
                "display": "flex"
            }}>


                {
                    Object.entries(tools).map(([toolType, toolTiers]) => {
                        const nextUpgrade = toolTiers[inventory.tool[toolType].tier + 1]


                        const craftingAvailable = useMemo(() => (
                            nextUpgrade.crafting.requiredUnlock? Object.entries(nextUpgrade.crafting.requiredUnlock).every(([type, required]) => getUnlocked(type, required)) : true
                        ), [inventory])


                        const materialsAvailable = useMemo(() => (
                            Object.entries(nextUpgrade.crafting.requiredMaterial).every(([resource, required]) => getMaterialAmount(resource) >= required) // every returns boolean if all are true
                        ), [inventory])


                        return (
                            <div style={{
                                "display": craftingAvailable? "block" : "none"
                            }}>
                                <h2>{nextUpgrade.title}</h2>
                                <h3>Required Items</h3>
                                {Object.entries(nextUpgrade.crafting.requiredMaterial).map(([material, amount]) => {
                                    const materialTitle = allResources[material].title
                                    return <p>{materialTitle + ": " + amount}</p>
                                })}
                                <button disabled={!materialsAvailable} onClick={() => addItemFunction(toolType, nextUpgrade)}>Craft Item</button>
                            </div>
                        )
                    })
                }

                
            </div>

            <h1>Crafting Resources</h1>

            <div style={{
                "display": "flex"
            }}>

                {
                    Object.entries(resources.craftedMaterials).map(([materialKey, materialDetails]) => {

                        const materialsAvailable = false

                        return (
                            <div>
                                <h2>{materialDetails.title}</h2>
                                <h3>Required Items</h3>
                                {Object.entries(materialDetails.requiredMaterial).map(([material, amount]) => {
                                    const materialTitle = allResources[material].title
                                    return <p>{materialTitle + ": " + amount}</p>
                                })}
                                <button disabled={!materialsAvailable}>Craft Resource</button>
                            </div>
                        )
                    })
                }

            </div>
            
        </div>
    )
}
export default CraftingWindow
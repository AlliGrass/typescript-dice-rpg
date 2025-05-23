import { useMemo, useState } from "react"
import { useDefaults } from "../contexts/DefaultsContext"
import { useInventoryStore } from "../stores/useInventoryStore"

const CraftingWindow = () => {

    const {items: { resources, tools } } = useDefaults()

    const inventory = useInventoryStore()
    const { inventoryAddItem } = useInventoryStore()

    const addItemFunction = (itemID: string, requiredItems: [key: string]) => {
        // const itemAdded = {
        //     [itemID]: tools[itemID] 
        // }
        const { crafting, ...toolDetails} = tools[itemID]
        const itemAdded = {
            [itemID]: toolDetails
        }

        const materialCost = Object.assign({}, ...Object.entries(requiredItems).map(([material, amount]) => {
            return {
                [material]: {
                    path: resources[material].path,
                    amount: amount
                }
            }
        }))
        inventoryAddItem(itemAdded, materialCost)
    }


    const getMaterialAmount = (resource: string): number => {

        const path = resources[resource].path
        // console.log(path)
        let currentPath: any = inventory
        for (const nextPosition of path) {
            currentPath = currentPath[nextPosition]
        }
        return currentPath[resources[resource].itemKey]

    }

    const getUnlocked = (type: any, required: any): boolean => {

        const result = Object.keys(inventory[type]).includes(required) // tool specific | not applicable to structures


        return result
    }


    return (
        <div>
            <h1>Crafting Tools</h1>
            <div style={{
                "display": "flex"
            }}>
                {Object.entries(tools).map(([itemObject, itemObjectValues]) => {
                    // const [craftingAvailable, setCraftingAvailable] = useState<boolean>(true)

                    const craftingAvailable = useMemo(() => (
                        itemObjectValues.crafting.requiredUnlock? Object.entries(itemObjectValues.crafting.requiredUnlock).every(([type, required]) => getUnlocked(type, required)) : true
                    ), [inventory])
                    // itemObjectValues.crafting.requiredUnlock ? Object.entries(itemObjectValues.crafting.requiredUnlock).every(([type, required]) => getUnlocked(type, required)) : true



                    const materialsAvailable = useMemo(() => (
                        Object.entries(itemObjectValues.crafting.requiredMaterial).every(([resource, required]) => getMaterialAmount(resource) >= required) // every returns boolean if all are true
                    ), [inventory])


                    return (
                        <div style={{
                            "display": craftingAvailable? "block" : "none"
                        }}>
                            <h2>{itemObjectValues.title}</h2>
                            <h3>Required Items</h3>
                            {Object.entries(itemObjectValues.crafting.requiredMaterial).map(([material, amount]) => {
                                return (
                                    <p>{material + ": " + amount}</p> // material names not titled | item keys
                                )
                            })}
                            <button disabled={(!materialsAvailable || inventory.tool[itemObject])} onClick={() => addItemFunction(itemObject, itemObjectValues.crafting.requiredMaterial)}>Craft Item</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default CraftingWindow
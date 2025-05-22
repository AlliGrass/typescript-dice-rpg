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


    return (
        <div>
            <h1>Crafting Tools</h1>
            {/* <button onClick={addItemFunction}>testAddItem</button> */}
            <button onClick={() => console.log(inventory)}>show inventory</button>
            {
                Object.entries(inventory.material).map(([key, value]) => <h3>{key +": " + value}</h3>)
            }
            <div style={{
                "display": "flex"
            }}>
                {Object.entries(tools).map(([itemObject, itemObjectValues]) => {
                    const [craftingAvailable, setCraftingAvailable] = useState<boolean>()

                    const materialsAvailable = useMemo(() => (

                        Object.entries(itemObjectValues.crafting.requiredItems).every(([resource, required]) => getMaterialAmount(resource) >= required)


                    ), [inventory])


                    return (
                        <div>
                            <h2>{itemObjectValues.title}</h2>
                            <h3>Required Items</h3>
                            {Object.entries(itemObjectValues.crafting.requiredItems).map(([material, amount]) => {
                                return (
                                    <p>{material + ": " + amount}</p>
                                )
                            })}
                            <button disabled={(!materialsAvailable || inventory.tool[itemObject])} onClick={() => addItemFunction(itemObject, itemObjectValues.crafting.requiredItems)}>Craft Item</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default CraftingWindow
import { useMemo, useState } from "react"
import { useDefaults } from "../contexts/DefaultsContext"
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"
import { useInventoryStore } from "../stores/useInventoryStore"

const CraftingWindow = () => {

    const {items: { resources, tools } } = useDefaults()

    const inventory = useInventoryStore()
    const { inventoryAddItem } = useInventoryStore()

    const addItemFunction = () => {
        const materials = {
            stick: {
                path: ["material", "wood"],
                amount: 1
            },
            stone: {
                path: ["material", "mineral"],
                amount: 2
            }
        }
        inventoryAddItem("stoneAxe", materials)
    }

    // const getMaterialAmount = (resource: string): number => {
    //     const path = resources[resource].path
    //     let currentPath: any = inventory
    //     for (const nextPosition of path) {
    //         currentPath = currentPath[nextPosition]
    //     }
        
    //     return currentPath[resources[resource].itemKey]
    // }


    return (
        <div>
            <h1>Crafting Tools</h1>
            <button onClick={addItemFunction}>testAddItem</button>
            <button onClick={() => console.log(inventory)}>show inventory</button>
            {
                Object.entries(inventory.material).map(([key, value]) => <h3>{key +": " + value}</h3>)
            }
            <div style={{
                "display": "flex"
            }}>
                {Object.entries(tools).map(([itemObject, itemObjectValues]) => {
                    const [craftingAvailable, setCraftingAvailable] = useState<boolean>()

                    // const materialsAvailable = useMemo(() => (

                    //     Object.entries(itemObjectValues.crafting.requiredItems).every(([material, required]) => {
                    //         (getMaterialAmount(material) ?? 0) >= required

                    //     })
                    // ), [inventory])
                    return (
                        <div>
                            <h2>{itemObjectValues.title}</h2>
                            <h3>Required Items</h3>
                            {Object.entries(itemObjectValues.crafting.requiredItems).map(([material, amount]) => {
                                return (
                                    <p>{material + ": " + amount}</p>
                                )
                            })}
                            <button disabled={!materialsAvailable} onClick={() => addItem(itemObject, itemObjectValues.crafting.requiredItems)}>Craft Item</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}
export default CraftingWindow
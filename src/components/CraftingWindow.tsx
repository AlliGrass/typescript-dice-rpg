import { useMemo, useState } from "react"
import { useDefaults } from "../contexts/DefaultsContext"
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"

const CraftingWindow = () => {

    const { addItem } = usePlayerStore()

    const {items: { tools } } = useDefaults()
    const playerInventory = usePlayerStore( (state: PlayerState) => state.inventory)


    return (
        <div>
            <h1>Crafting Tools</h1>
            <button onClick={() => console.log(playerInventory)}>show inventory</button>
            {
                Object.entries(playerInventory.materials).map(([key, value]) => <h3>{key +": " + value}</h3>)
            }
            {Object.entries(tools).map(([itemObject, itemObjectValues]) => {
                // const [craftingAvailable, setCraftingAvailable] = useState<boolean>()
                console.log(itemObject + ": " + itemObjectValues)

                const materialsAvailable = useMemo(() => (
                    Object.entries(itemObjectValues.crafting.requiredItems).every(([material, required]) => (playerInventory.materials[material] ?? 0) >= required)
                ), [playerInventory])

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
    )
}
export default CraftingWindow
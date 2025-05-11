import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"


const InventoryWindow = () => {
    const playerInventory = usePlayerStore((state: PlayerState) => state.inventory)

    

    return (
        <div>
            <h1>Inventory</h1>
            <h2>Tools</h2>
            {
                Object.entries(playerInventory.tool).map(([key, value]) => {
                    console.log(playerInventory.tool)
                    return <h3>{key + ": " + value}</h3>
                })
            }
            <h2>Header</h2>
            <p>items</p>
            <h2>Resources</h2>
            {
                Object.entries(playerInventory.materials).map(([key, value]) => {
                    return <h3>{key +": " + value}</h3>
                })
            }
        </div>
    )
}

export default InventoryWindow
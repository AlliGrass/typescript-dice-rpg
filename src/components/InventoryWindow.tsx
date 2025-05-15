import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"


const InventoryWindow = () => {
    const playerInventory = usePlayerStore((state: PlayerState) => state.inventory)

    

    return (
        <div>
            <h1>Inventory</h1>
            <h2>Tools</h2>
            {
                Object.entries(playerInventory.tool).map(([key, value]) => {
                    return <h3>{key + ": " + value}</h3>
                })
            }
            <h2>Header</h2>
            <p>items</p>
            <h2>Resources</h2>
            {
                Object.entries(playerInventory.material).map(([key, value]) => {
                    return (
                        <>
                            <h3>{key}</h3>
                            {
                                Object.entries(value).map(([key, value]) => {
                                return <p>{key + ":" + value}</p>
                            })
                            }
                        </>

                    )
                })
            }
        </div>
    )
}

export default InventoryWindow
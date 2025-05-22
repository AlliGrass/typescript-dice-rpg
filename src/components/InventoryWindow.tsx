import { useInventoryStore } from "../stores/useInventoryStore"
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"


const InventoryWindow = () => {
    const playerInventory = useInventoryStore()
    // const playerInventory = usePlayerStore((state: PlayerState) => state.inventory)

    const showItem = (inventorySection: any) => {
    
    // object entries
    console.log("working")
    // run function if values are objects
    
    
    // return object values if numbers
    
    }



    return (
        <div>
            <h1>Inventory</h1>
            
            <div style={{
                'display': Object.keys(playerInventory.tool).length === 0 ? "none": "block" // tool is empty/
            }}>
                <h2>Tools</h2>
                {
                    
                    Object.entries(playerInventory.tool).map(([toolKey, toolDetails]) => {
                        return <h3>{toolDetails.title}</h3> // hover display durability
                    })

                }
            </div>
            
            <div>
                <h2>Resources</h2>
                {
                    Object.entries(playerInventory.material).map(([key, value]) => {
                        return (
                            <>
                                <h3>{key}</h3>
                                {
                                    Object.entries(value).map(([key, value]) => {
                                        console.log(typeof value === "object")
    
                                        if (typeof value === "object") Object.entries(value).map(([key, value]) => { return <p>{key + ": " + value}</p> })
                                        if (value != 0 && typeof value === "number") return <p>{key + ":" + value}</p> // if object object.entries
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default InventoryWindow
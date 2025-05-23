import { useDefaults } from "../contexts/DefaultsContext"
import { useInventoryStore } from "../stores/useInventoryStore"


const InventoryWindow = () => {
    const playerInventory = useInventoryStore()
    const {items: {resources}} = useDefaults() // resource exclusive
    // const playerInventory = usePlayerStore((state: PlayerState) => state.inventory)

    const showItem = (inventorySection: Object, itemtype?: any) => { // useMemo
        return (
            <div>
                {Object.entries(inventorySection).map(([key, value]) => {
                    console.log("inventory rerender")
                    if (typeof value === "object") {
                        return (
                            <>
                                <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                {showItem(value, key)}
                            </>
                        )
                    }
                    if (value != 0 && typeof value === "number") {
                        const resource = key + itemtype.charAt(0).toUpperCase() + itemtype.slice(1)
                        let itemTitle
                        if (resources[key]) { // resource exclusive
                            itemTitle = resources[key].title
                        } else if (resources[resource]) { // resource exclusive
                            itemTitle = resources[resource].title
                        }
                        return <p>{itemTitle + ": " + value}</p>
                    }
                })}
            </div>
        )
    }


    const componentRender = () => {
        return <p>Working</p>
    }

    return (
        <div>
            <h1>Inventory</h1>
            {
                componentRender()
            }
            
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
                    showItem(playerInventory.material)
                }



                {

                    // Object.entries(playerInventory.material).map(([key, value]) => {
                    //     return (
                    //         <>
                    //             <h3>{key}</h3>
                    //             {
                    //                 Object.entries(value).map(([key, value]) => {
    
                    //                     if (typeof value === "object") Object.entries(value).map(([key, value]) => { return <p>{key + ": " + value}</p> })
                    //                     if (value != 0 && typeof value === "number") return <p>{key + ":" + value}</p> // if object object.entries
                    //                 })
                    //             }
                    //         </>
                    //     )
                    // })
                }
            </div>
            
        </div>
    )
}

export default InventoryWindow
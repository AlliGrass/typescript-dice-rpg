import { useState, useMemo } from "react"
import CraftingWindow from "../CraftingWindow"
import { useInventoryStore } from "../../stores/useInventoryStore"


const Home = () => {

    const [craftingWindowVisibility, setCraftingWindowVisibility] = useState<boolean>(false)

    const playerInventory = useInventoryStore()

    const homeTitle = useMemo(() => (
        playerInventory.structure.home.title === "" ? "Camp" : playerInventory.structure.home.title + playerInventory.structure.home.tier
    ), [playerInventory])

    return (
        <div>
            <h1>{homeTitle}</h1>

            <button onClick={() => {setCraftingWindowVisibility(!craftingWindowVisibility)}}>craft</button>

            <section style={{
                    'display': craftingWindowVisibility? "block" : "none",
                    'position': 'fixed',
                    'top' : '50%', 
                    'left' : '50%',
                    'transform' : 'translate(-50%, -50%)',
                    'background': 'gray',
                    'border': 'solid red',
                    'padding': '35px',
                }}>
                    <CraftingWindow/>
                </section>
        </div>
    )
}

export default Home
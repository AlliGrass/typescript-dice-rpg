import { useState } from "react"
import CraftingWindow from "../CraftingWindow"


const Home = () => {

    const [craftingWindowVisibility, setCraftingWindowVisibility] = useState<boolean>(false)

    return (
        <div>
            <h1>Home</h1>
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
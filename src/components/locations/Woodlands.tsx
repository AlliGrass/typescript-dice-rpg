import { PlayerState, usePlayerStore } from "../../stores/usePlayerStore";

const Woodlands = () => {
    // const stick = usePlayerStore((state: PlayerState) => state.inventory.materials.stick)
    // const wood = usePlayerStore((state: PlayerState) => state.inventory.materials.wood)


    return (
        <div>
            <h1>Woodlands</h1>
            <div style={{
                'display': 'flex',
                'justifyContent': 'space-evenly'
            }}>
                <div>
                    <h3>stick chance</h3>
                    <span>100%</span>
                </div>
                <div>
                    <h3>log chance</h3>
                    <span>0%</span>
                </div>
            </div>
            {/* <h2>Current Sticks: {stick}</h2>
            <h2>Current Wood: {wood}</h2> */}
            
        </div>
    )
}

export default Woodlands
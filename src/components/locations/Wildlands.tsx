
import { useDefaults } from "../../contexts/DefaultsContext";
import { PlayerState, usePlayerStore } from "../../stores/usePlayerStore";

const Wildlands = () => {
    // const { healthCurrent, healthMax } = usePlayerStore((state: PlayerState) => ({ healthCurrent: state.healthCurrent, healthMax: state.healthMax }))

    const healthCurrent = usePlayerStore((state: PlayerState) => state.healthCurrent)

    const healthMax = usePlayerStore((state: PlayerState) => state.healthMax)

    
    const {enemy} = useDefaults()

    return (
        <div style={{
            'display': 'flex',
            'justifyContent': 'space-between',
            'padding': '40px',
        }}>
            <div>
                <h2>PC</h2>
                <p>{healthCurrent + "/" + healthMax}</p>
            </div>
            <div>
                <h2>Enemy</h2>
                <p>{enemy.health} / 10</p>
            </div>
        </div>
    )
}
export default Wildlands
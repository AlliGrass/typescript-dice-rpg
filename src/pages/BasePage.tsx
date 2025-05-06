import { useState } from "react"
import Woodlands from "../components/locations/Woodlands"
import Wildlands from "../components/locations/Wildlands"
import ActionBar from "../components/ActionBar"
import { LocationElement, LocationNames } from "../types/Location.types"
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"
import { DiceRollType, useDiceStore } from "../stores/useDiceStore"
import Wilderness from "../components/locations/Wilderness"
import Mine from "../components/locations/Mine"
import Home from "../components/locations/Home"
import River from "../components/locations/River"
import Profile from "../components/Profile"





const BasePage = () => {

    const [profileVisibility, setProfileVisibility] = useState<boolean>(false)

    const [currentLocation, setCurrentLocation] = useState<LocationNames>("wildlands")

    const locations: Record<LocationNames, LocationElement> = {
        woodlands: <Woodlands/>,
        wildlands: <Wildlands/>,
        wilderness: <Wilderness/>,
        mine: <Mine/>,
        home: <Home/>,
        river: <River/>
    }




    // Global Variables

    // Dice roll settings / result

    // Profile

    // const { gatherMaterial } = usePlayer()

    const diceResult = useDiceStore( (state: DiceRollType) => state.diceResult)

    const rollDice = useDiceStore( (state: DiceRollType) => state.rollDice)

    const updateHealth = usePlayerStore( (state: PlayerState) => state.updateHealth)

    const gatherMaterial = usePlayerStore((state: PlayerState) => state.gatherMaterial)

    const changeHealth = () => {
        updateHealth()
    }

    const gainWood = () => {
        gatherMaterial()
    }

    const toggleProfile = () => {
        setProfileVisibility(!profileVisibility)
    }

    

    return (
        <div style={{
            'height': '100dvh',
            'display': 'flex',
            'justifyContent': 'space-between',
        }}>
            <section style={{
                'width': '30dvw',
                'display': 'flex',
                'flexDirection': 'column',
                'justifyContent': 'space-between',
            }}>
                <div style={{
                    'border': 'solid blue',
                }}>
                    <h1>Dice Box</h1>
                </div>
                <div>
                    <h3>Dice result</h3>
                    <h2>{diceResult}</h2>
                    <button onClick={() => {rollDice(100, true)}}>Roll Dice</button>
                </div>
                <div style={{
                    'border': 'solid blue',
                }}>
                    <button onClick={toggleProfile}>Profile</button>
                </div>
            </section>
            <section style={{
                'width': '70dvw',
                'display': 'flex',
                'flexDirection': 'column',
                'justifyContent': 'space-evenly',
            }}>
                
                {/* <Wildlands/> */}

                    {/* <Wildlands/> */}
                    {locations[currentLocation]}
                
                <ActionBar location={currentLocation}/>

                <div>
                    <h1>Change Location</h1>
                    <button onClick={()=> {setCurrentLocation("wildlands")}}>Wildlands</button>
                    <button onClick={()=> {setCurrentLocation("woodlands")}}>Woodlands</button>
                    <button onClick={()=> {setCurrentLocation("wilderness")}}>Wilderness</button>
                    <button onClick={()=> {setCurrentLocation("mine")}}>Mine</button>
                    <button onClick={()=> {setCurrentLocation("home")}}>Home</button>
                    <button onClick={()=> {setCurrentLocation("river")}}>River</button>

                </div>

                
                <section style={{
                    'display': profileVisibility? "block" : "none",
                    'position': 'fixed',
                    'top' : '50%', 
                    'left' : '50%',
                    'transform' : 'translate(-50%, -50%)',
                    'background': 'gray',
                    'border': 'solid red',
                    'padding': '35px',
                }}>
                    <Profile  visibility={ toggleProfile }/>
                </section>
            </section>


            
        </div>
    )
}

export default BasePage
import { useState } from "react"

import ActionBar from "../components/ActionBar"
import { PageLocations, LocationNameType } from "../types/Location.types"
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore"
import { DiceRollType, useDiceStore } from "../stores/useDiceStore"

import Profile from "../components/Profile"
import InventoryWindow from "../components/InventoryWindow"





const BasePage = () => {

    const [pageComponentVisibility, setPageComponentVisibility] = useState({
        profile: false,
        inventory: false,
        crafting: false
    })

    const [inventoryVisibility, setInventoryVisibility] = useState<boolean>(false)

    const [currentLocation, setCurrentLocation] = useState<LocationNameType>("wildlands")

    const diceResult = useDiceStore( (state: DiceRollType) => state.diceResult)
    const rollDice = useDiceStore( (state: DiceRollType) => state.rollDice)

    const toggleProfile = () => {
        setPageComponentVisibility((pageComponents) => ({...pageComponents, profile: !pageComponents.profile}))
        // setProfileVisibility(!profileVisibility)
    }
    const toggleInventory = () => {
        setPageComponentVisibility((pageComponents) => ({...pageComponents, inventory: !pageComponents.inventory}))
    }

    const toggleCrafting = () => {
        setPageComponentVisibility((pageComponents) => ({...pageComponents, crafting: !pageComponents.crafting}))
    }

    // const toggleComponentWindow = (component: string) => {
    //     setPageComponentVisibility((pageComponents) => ({...pageComponents, [component]: !pageComponents[component]}))
    // }

    const {inventoryAddDebugTestItems, inventoryAddDebugTestMaterials} = usePlayerStore()


    const debugTestFunction = () => {
        inventoryAddDebugTestItems()
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
                    <button onClick={debugTestFunction}>Add Debug/Test Items</button>
                    <button onClick={toggleInventory}>Show Inventory</button>
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
                
                {PageLocations[currentLocation]}
                
                <ActionBar location={currentLocation} craftingVisibility={ toggleCrafting }/>

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
                    'display': pageComponentVisibility.profile? "block" : "none",
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
                <section style={{
                    'display': pageComponentVisibility.inventory? "block" : "none",
                    'position': 'fixed',
                    'top' : '50%', 
                    'left' : '50%',
                    'transform' : 'translate(-50%, -50%)',
                    'background': 'gray',
                    'border': 'solid red',
                    'padding': '35px',
                }}>
                    <InventoryWindow/>
                </section>

            </section>


            
        </div>
    )
}

export default BasePage
import { useEffect, useState } from "react";
import { LocationNameType } from "../types/Location.types";
import { useActionButtons } from "../hooks/useActionButtons";
import { useDefaults } from "../contexts/DefaultsContext";
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore";
import { useInventoryStore } from "../stores/useInventoryStore";

interface ActionBarProp {
    location: LocationNameType,
    craftingVisibility: () => void 
}

const ActionBar = ({location, craftingVisibility}: ActionBarProp) => {
    const { initial: { page: { locations } } } = useDefaults()
    const playerInventory = useInventoryStore()


    type ActionBarButtons =  {
        title: string,
        active: boolean,
        action: string,
        requirement?: {
            type: string,
            require: string
        },
        variable?: any[],
    }

    const buttonAction = useActionButtons()

    const [actionButtons, setActionButtons] = useState<ActionBarButtons[]>([])
    

    useEffect(() => {
        setActionButtons(locations[location].buttons)
    }, [location]) // change to memo/callback later (?)

    return (
        <div>
            <h2>Action Bar</h2>
            {
                actionButtons.map((buttonInfo, index) => {
                    const buttonActive = buttonInfo.active ? true : buttonInfo.requirement? playerInventory[buttonInfo.requirement.type][buttonInfo.requirement.require]? true : false : false
                    return (
                    <button 
                        key={index} 
                        onClick={() => {buttonInfo.variable? buttonAction[buttonInfo.action](...buttonInfo.variable) : buttonAction[buttonInfo.action]()}} 
                        disabled={!buttonActive}
                    >
                        {buttonInfo.title}
                    </button>
                    )
                })
            }
        </div>
    )
}

export default ActionBar
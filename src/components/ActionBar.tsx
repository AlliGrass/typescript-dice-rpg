import { useEffect, useState } from "react";
import { LocationNameType } from "../types/Location.types";
import { useActionButtons } from "../hooks/useActionButtons";
import { useDefaults } from "../contexts/DefaultsContext";
import { PlayerState, usePlayerStore } from "../stores/usePlayerStore";

interface ActionBarProp {
    location: LocationNameType,
    craftingVisibility: () => void 
}

const ActionBar = ({location, craftingVisibility}: ActionBarProp) => {
    const { initial: { page: { locations } } } = useDefaults()
    const playerInventory = usePlayerStore( (state: PlayerState) => state.inventory)


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

    const buttonActions = useActionButtons()

    const [actionButtons, setActionButtons] = useState<ActionBarButtons[]>([])

    useEffect(() => {
        setActionButtons(locations[location].buttons)
    }, [location]) // change to memo/callback later (?)



    return (
        <div>
            <h2>Action Bar</h2>
            {
                actionButtons.map((buttonInfo, index) => {
                    const requirementFulfilled = buttonInfo.requirement? playerInventory[buttonInfo.requirement.type].includes(buttonInfo.requirement.require): false

                    const buttonActive = buttonInfo.active ? true : requirementFulfilled
                    return (
                    <button 
                        key={index} 
                        onClick={() => buttonInfo.variable? buttonActions[buttonInfo.action](buttonInfo.variable) : buttonActions[buttonInfo.action]()} 
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
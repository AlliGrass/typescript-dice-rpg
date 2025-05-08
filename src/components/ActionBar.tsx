import { useEffect, useState } from "react";
import { LocationNameType } from "../types/Location.types";
import { useActionButtons } from "../hooks/useActionButtons";
import { DefaultData } from "../contexts/data/DefaultData";

interface ActionBarProp {
    location: LocationNameType
}

const ActionBar = ({location}: ActionBarProp) => {
    const defaultLocationButtons = DefaultData.initial.page.locations

    type ActionBarButtons =  {
        title: string,
        active: boolean,
        action: string
    }

    const buttonActions = useActionButtons()

    const [actionButtons, setActionButtons] = useState<ActionBarButtons[]>([])

    useEffect(() => {
        setActionButtons(defaultLocationButtons[location].buttons)
    }, [location])

    return (
        <div>
            <h2>Action Bar</h2>
            {
                actionButtons.map((buttonInfo, index) => (
                    <button key={index} onClick={buttonActions[buttonInfo.action]} disabled={!buttonInfo.active}>
                        {buttonInfo.title}
                    </button>
                ))
            }
        </div>
    )
}

export default ActionBar
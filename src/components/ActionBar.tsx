import { useEffect, useState } from "react";
// import { usePlayer } from "../contexts/PlayerContext";
import { LocationName } from "../types/Location.types";

interface ActionBarProp {
    location: LocationName
}


const ActionBar = ({location}: ActionBarProp) => {

    // const { gatherMaterial } = usePlayer()

    type ActionBarButtons =  {
        title: string,
        active: boolean,
        action: () => void
    }

    const templateFunction = () => {
        return
    }

    // const gainWood = () => {
    //     gatherMaterial("wood", 1)
    // }




    const [actionButtons, setActionButtons] = useState<ActionBarButtons[]>([])

    const getButtons = () => {
        switch (location) {
            case 'woodlands':
                return [
                    {
                        title: 'Gather Sticks',
                        active: true,
                        action: templateFunction
                    },
                    {
                        title: 'Gather Wood',
                        active: false,
                        action: templateFunction,
                    }
                ]
            case 'wildlands':
                return [
                    {
                        title: 'Attack',
                        active: true,
                        action: templateFunction, 
                    }
                ]
            case 'wilderness':
                return [
                    {
                        title: "Scavenge for Food",
                        active: true,
                        action: templateFunction,
                    },
                    {
                        title: "Hunt for Food",
                        active: false,
                        action: templateFunction
                    }
                ]
            case "mine":
                return [
                    {
                        title: "Gather Stone",
                        active: true,
                        action: templateFunction
                    },
                    {
                        title: "Coal",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Bronze",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Copper",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Iron",
                        active: false,
                        action: templateFunction
                    }
                ]
            case "home": 
                return [
                    {
                        title: "Start Fire",
                        active: true,
                        action: templateFunction
                    },
                    {
                        title: "Craft",
                        active: true,
                        action: templateFunction
                    },
                    { 
                        title: "Build Structure",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Expand",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Merchant",
                        active: false,
                        action: templateFunction
                    }
                ]
            case "river":
                return [
                    {
                        title: "Catch Fish",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Build Dock",
                        active: false,
                        action: templateFunction
                    },
                    {
                        title: "Shipping Merchant",
                        active: false,
                        action: templateFunction
                    }
                ]
        }
    }




    useEffect(() => {
        setActionButtons(getButtons)
    }, [location])

    return (
        <div>
            <h2>Action Bar</h2>

            {
                actionButtons.map((buttonInfo, index) => (
                    <button key={index} onClick={buttonInfo.action} disabled={!buttonInfo.active}>
                        {buttonInfo.title}
                    </button>
                ))
            }
        </div>
    )
}

export default ActionBar
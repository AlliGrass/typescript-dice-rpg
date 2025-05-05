import { createContext, ReactNode, useContext } from "react"

type DefaultContextType = {
    [key: string]: {
        [key: string]: number,
    }
}

const DefaultContext = createContext<DefaultContextType>({
    player: {
        health: 10,
        strength: 1
    },
    enemy: {
        health: 10,
        strength: 1
    }
})

// type = {
//     initial: {
//         page: {
//             location: {
//                 buttons: [
//                     {
//                         title: string,
//                         function: function,
//                     }
//                 ]
//             }
//         },
//         player: {
//             class: {
//                 health: number,
//                 strength: number,
//             }
//         }, 
//         enemy: {
//             type: {
//                 health: number,
//                 strength: number,
//             }
//         },
//     },
//     base: {
//         toHit: number,
//     },
//     notation: {
//         attack: {

//         },
//         skills: {

//         },
//         class: {

//         },
//     }
// }


export const DefaultsProvider = ({ children }: {children: ReactNode}) => {
    const defaults = {
        player: {
            health: 10,
            strength: 1
        },
        enemy: {
            health: 10,
            strength: 1
        }
    }

    return (
        <DefaultContext.Provider value={defaults}>
            {children}
        </DefaultContext.Provider>
    )
}

export const useDefaults = () => useContext(DefaultContext)
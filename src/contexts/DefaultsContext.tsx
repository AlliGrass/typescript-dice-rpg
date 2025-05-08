import { createContext, ReactNode, useContext } from "react"
import { DefaultContextType } from "../types/Default.types"
import { DefaultData } from "./data/DefaultData"




const DefaultContext = createContext<DefaultContextType>(DefaultData)


export const DefaultsProvider = ({ children }: {children: ReactNode}) => {

    return (
        <DefaultContext.Provider value={DefaultData}>
            {children}
        </DefaultContext.Provider>
    )
}

export const useDefaults = () => useContext(DefaultContext)
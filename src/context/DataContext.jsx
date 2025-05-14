import { createContext, useState } from "react";

export let DataContext = createContext()


export function DataProvider({children}){
    
    let [data, setData] = useState(null)
    let [titulo, setTitulo] = useState('')

    return (
        <DataContext.Provider value={{data, setData, titulo, setTitulo}}>
            {children}
        </DataContext.Provider>
    )
}
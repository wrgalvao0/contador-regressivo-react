import { createContext, useState } from "react";

export let DataContext = createContext();


export function DataProvider({children}){
    
    let [data, setData] = useState(null)

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}
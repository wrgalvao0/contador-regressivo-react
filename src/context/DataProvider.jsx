import { DataContext } from "./DataContext";

export function DataProvider({ children }) {
    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    )
}

import { variables } from "data/content";
import { createContext } from "react"

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={variables}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

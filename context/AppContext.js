import { useBreakpointValue } from "@chakra-ui/react";
import { variables } from "data/content";
import { createContext } from "react"

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {

    const isNotSmallerScreen = useBreakpointValue({ md: true })
    const appContextVal = {
        ...variables,
        isNotSmallerScreen,
    }
    return (
        <AppContext.Provider value={appContextVal}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

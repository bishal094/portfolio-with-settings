import { useMediaQuery } from "@chakra-ui/react";
import { variables } from "data/content";
import { createContext, useLayoutEffect, useState } from "react"

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {

    const [mediaQuery] = useMediaQuery("(min-width: 820px)")
    const [isNotSmallerScreen, setIsNotSmallerScreen] = useState(false)
    useLayoutEffect(() => {
        setIsNotSmallerScreen(mediaQuery);
    }, [mediaQuery])
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

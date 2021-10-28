import { useMediaQuery } from "@chakra-ui/react";
import { variables } from "data/content";
import { createContext, useEffect, useState } from "react"

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 820px)")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    const appContextVal = {
        ...variables,
        isNotSmallerScreen,
        mounted
    }
    return (
        <AppContext.Provider value={appContextVal}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider

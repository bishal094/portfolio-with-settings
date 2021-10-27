import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'

const Chakra = ({ children }) => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode="light"></ColorModeScript>
            {children}
        </ChakraProvider>
    )
}

export default Chakra

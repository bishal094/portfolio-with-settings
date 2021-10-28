import { Flex, Heading, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { AppContext } from "context/AppContext"
import { useContext } from "react"
import { FaMoon, FaSun } from "react-icons/fa";

const NavSection = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { pageHeader, headerUrls, isNotSmallerScreen, mounted } = useContext(AppContext)
    return (
        <Flex w="100%" flexDirection={mounted && isNotSmallerScreen ? "row" : "column"} alignItems={mounted && !isNotSmallerScreen && "center"} py="3">
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.600">

                {pageHeader}
            </Heading>
            <Spacer></Spacer>
            <Flex>
                {
                    headerUrls?.map((url, i) => (

                        <a href={url.url} target="_blank" key={i}>
                            <IconButton ml={8} icon={<url.icon />} isRound="true" mt={mounted && !isNotSmallerScreen && "3"}></IconButton>
                        </a>
                    ))
                }
            </Flex>
            <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} mt={mounted && !isNotSmallerScreen && "3"}></IconButton>
        </Flex>
    )
}

export default NavSection

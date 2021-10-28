import { useMediaQuery } from "@chakra-ui/media-query"
import { Flex } from "@chakra-ui/layout"
import { Box, Heading, Icon, Text } from "@chakra-ui/react"
import { DiAngularSimple, DiReact, DiBootstrap } from "react-icons/di"
import DevelopementLanguages from "./DevelopementLanguages"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { AppContext } from "context/AppContext"

const Profile = () => {
    const [mounted, setMounted] = useState(false)
    const {
        workExperience: {
            middleTitle,
            bigColoredText,
            smallText,
            areaOfExpertise,
        } } = useContext(AppContext)

    useEffect(() => {
        setMounted(true)
    }, [])
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    return (
        <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"} w="100%" justifyContent="center">
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    {bigColoredText}
                </Heading>
                <Text fontSize="2xl" color="gray.400">{smallText}</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontSize="2xl" fontWeight="bold">{middleTitle}</Text>
                <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"} mt={8}>

                    {
                        areaOfExpertise?.map(({ logo, bgColor, title }, i) => (
                            <DevelopementLanguages key={i} logo={logo} bgColor={bgColor} title={title} i={i} />
                        ))
                    }
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile

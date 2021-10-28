import { Flex } from "@chakra-ui/layout"
import { Box, Heading, Text } from "@chakra-ui/react"
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
        }, isNotSmallerScreen } = useContext(AppContext)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" justifyContent="space-between" w={isNotSmallerScreen ? "83vw" : "98vw"}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    {bigColoredText}
                </Heading>
                <Text fontSize="2xl" color="gray.400">{smallText}</Text>
            </Box>
            <Box alignSelf="center">
                <Text fontSize="2xl" fontWeight="bold">{middleTitle}</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} alignItems="center">

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

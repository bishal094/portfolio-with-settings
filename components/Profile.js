import { useMediaQuery } from "@chakra-ui/media-query"
import { Flex } from "@chakra-ui/layout"
import { Box, Heading, Icon, Text } from "@chakra-ui/react"
import { DiAngularSimple, DiReact, DiBootstrap } from "react-icons/di"
import DevelopementLanguages from "./DevelopementLanguages"
import { useEffect, useState } from "react"

const Profile = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    const languages = [
        {
            logo: DiAngularSimple,
            title: "Angular Apps",
            bgColor: "red.400"
        },
        {
            logo: DiReact,
            title: "React Apps",
            bgColor: "cyan.400"
        },
        {
            logo: DiBootstrap,
            title: "Bootstrap",
            bgColor: "purple.400"
        }
    ]
    return (
        <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"} w="100%" justifyContent="flex-start">
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    5+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontSize="2xl" fontWeight="bold">Frontend developer at Alpas technology</Text>
                <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"} mt={8}>

                    {
                        languages.map(({ logo, bgColor, title }, i) => (
                            <DevelopementLanguages key={i} logo={logo} bgColor={bgColor} title={title} i={i} />
                        ))
                    }
                </Flex>
            </Box>
        </Flex>
    )
}

export default Profile

import { Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'

const DevelopementLanguages = ({ logo, bgColor, title, i }) => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg={bgColor}
            h="20em"
            w="20em"
            justify="flex-end"
            ml={mounted && isNotSmallerScreen && i !== 0 ? 4 : 0}
            _hover={{ bg: bgColor.replace("4", "5") }}>
            <Icon color="white" p="4" as={logo} h="24" w="24" />
            <Text color="white" p="4" fontWeight="semibold">
                {title}
            </Text>
        </Flex>
    )
}

export default DevelopementLanguages

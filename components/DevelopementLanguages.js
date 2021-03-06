import { Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react'
import { AppContext } from 'context/AppContext'
import { useContext } from 'react'

const DevelopementLanguages = ({ logo, bgColor, title, i }) => {
    const { isNotSmallerScreen } = useContext(AppContext);
    return (
        <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg={bgColor}
            h="20em"
            w="20em"
            justify="flex-end"
            mr={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: bgColor.replace("4", "5") }}>
            <Icon color="white" p="4" as={logo} h="24" w="24" />
            <Text color="white" p="4" fontWeight="semibold">
                {title}
            </Text>
        </Flex>
    )
}

export default DevelopementLanguages

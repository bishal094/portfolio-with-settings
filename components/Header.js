import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode } from "@chakra-ui/react"
import { AppContext } from "context/AppContext"
import { useContext } from "react"

const Header = () => {
  const { firstSection: {
    firstText,
    coloredText,
    smallText,
    imgUrl,
    btnText,
    btnUrl
  }, isNotSmallerScreen } = useContext(AppContext)
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack w={isNotSmallerScreen ? "83vw" : "98vw"}>
      <Circle position="absolute" bg="blue.600" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
      <Flex direction={isNotSmallerScreen ? "row" : "column"}
        p={isNotSmallerScreen ? "32" : "3"}
        alignSelf="flex-start"
        justifyContent="space-between"
        width="100%"
        spacing="100px">
        <Box mt={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">{firstText}</Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">{coloredText}</Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>{smallText}</Text>
          <a href={btnUrl} target="_blank" rel="noopener noreferrer">
            <Button mt={8} bgGradient="linear(to-r, cyan.400, blue.300)">
              {btnText}
            </Button>
          </a>
        </Box>
        <Image
          alignSelf="center"
          my={isNotSmallerScreen ? "0" : "12"}
          src={imgUrl}
          boxSize="300px"
          boxShadow="lg"
          backgroundColor="transparent"
          borderRadius="full"
          height="300px"
          width="300px"
        />
      </Flex>
    </Stack>
  )
}

export default Header

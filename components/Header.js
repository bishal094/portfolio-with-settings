import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react"
import { AppContext } from "context/AppContext"
import { useContext, useEffect, useState } from "react"

const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { firstSection: {
    firstText,
    coloredText,
    smallText,
    imgUrl,
    btnText,
    btnUrl
  }, isNotSmallerScreen } = useContext(AppContext)
  useEffect(() => {
    setMounted(true)
  }, [])
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack w={mounted && isNotSmallerScreen ? "83vw" : "98vw"}>
      <Circle position="absolute" bg="blue.600" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
      <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"}
        p={mounted && isNotSmallerScreen ? "32" : "3"}
        alignSelf="flex-start"
        justifyContent="space-between"
        width="100%"
        spacing="100px">
        <Box mt={mounted && isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
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
          my={mounted && isNotSmallerScreen ? "0" : "12"}
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

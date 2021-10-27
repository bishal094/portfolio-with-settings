import { Box, Button, Circle, Flex, Image, Spacer, Stack, Text, useColorMode, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Header = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)")
  return (
    <Stack>
      <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
      <Flex direction={mounted && isNotSmallerScreen ? "row" : "column"} p={mounted && isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start" spacing="100px">
        <Box mt={mounted && isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">Hi, i am</Text>
          <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Bishal Shrestha</Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>Angular, React, Bootstrap, ASP.net core, Next.jsAngular, React, Bootstrap, ASP.net core, Next.js</Text>
          <Button mt={8} colorScheme="blue">
            Hire me
          </Button>
        </Box>
        <Spacer />
        <Image
          alignSelf="center"
          my={mounted && isNotSmallerScreen ? "0" : "12"}
          src="https://avatars.githubusercontent.com/u/48466664?s=400&u=a7ab7b84322362e99d2a76c6d144c8ae0db642ef&v=4"
          boxSize="300px"
          boxShadow="lg"
          backgroundColor="transparent"
          borderRadius="full"
        />
      </Flex>
    </Stack>
  )
}

export default Header

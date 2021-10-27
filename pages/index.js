import { ChakraProvider, Flex, Heading, IconButton, Spacer, VStack } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaSun, FaMoon, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import Header from '@components/Header';
import Social from '@components/Social';
import Profile from '@components/Profile';
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.600">

          Portfolio
        </Heading>
        <Spacer></Spacer>

        <IconButton ml={8} icon={<FaInstagram />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={<FaGithub />} isRound="true" onClick={toggleColorMode}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  )
}

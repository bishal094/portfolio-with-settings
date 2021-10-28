import { ChakraProvider, Flex, Heading, IconButton, Spacer, VStack } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { FaSun, FaMoon, FaGithub, FaInstagram, FaLinkedin, FaGitlab } from "react-icons/fa"
import Header from '@components/Header';
import Social from '@components/Social';
import Profile from '@components/Profile';
import { AppContext } from 'context/AppContext';
import { useContext } from 'react';
import Meta from '@components/Meta';
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { pageHeader, headerUrls, seo: { title, description, image, siteName, url } } = useContext(AppContext)
  // console.log(appContext)
  return (
    <>
      <Meta title={title} description={description} image={image} siteName={siteName} url={url} />
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.600">

            {pageHeader}
          </Heading>
          <Spacer></Spacer>
          {
            headerUrls?.map((url, i) => (

              <a href={url.url} target="_blank" key={i}>
                <IconButton ml={8} icon={<url.icon />} isRound="true"></IconButton>
              </a>
            ))
          }
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
      </VStack>
    </>
  )
}

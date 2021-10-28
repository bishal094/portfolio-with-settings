import { VStack } from '@chakra-ui/react'
import Header from '@components/Header';
import Social from '@components/Social';
import Profile from '@components/Profile';
import { AppContext } from 'context/AppContext';
import { useContext, useEffect, useState } from 'react';
import Meta from '@components/Meta';
import NavSection from '@components/NavSection';
export default function Home() {
  const { seo: { title, description, image, siteName, url } } = useContext(AppContext)
  // console.log(appContext)
  return (
    <>
      <Meta title={title} description={description} image={image} siteName={siteName} url={url} />
      <VStack p={5}>
        <NavSection />
        <Header />
        <Social />
        <Profile />
      </VStack>
    </>
  )
}

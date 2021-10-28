import Chakra from "../components/Chakra";
import '@styles/globals.css'
import AppContextProvider from "context/AppContext";
import Meta from "@components/Meta";

function Application({ Component, pageProps }) {
  return (
    <Chakra>
      <AppContextProvider>
        <Meta />
        <Component {...pageProps} />

      </AppContextProvider>
    </Chakra>
  )
}

export default Application

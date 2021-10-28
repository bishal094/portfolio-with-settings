import Chakra from "../components/Chakra";
import '@styles/globals.css'
import AppContextProvider from "context/AppContext";

function Application({ Component, pageProps }) {
  return (
    <Chakra>
      <AppContextProvider>
        <Component {...pageProps} />

      </AppContextProvider>
    </Chakra>
  )
}

export default Application

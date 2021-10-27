import Chakra from "../components/Chakra";
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default Application

import { HStack } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icon"
import { FaFacebookF, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa"
import { useContext } from "react"
import { AppContext } from "context/AppContext"
const Social = () => {
    const { socialNetworks } = useContext(AppContext)
    return (
        <HStack justifyContent="space-between" wrap="wrap" minWidth="50vw">
            {
                socialNetworks?.map((social, i) => (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <Icon as={social.icon} boxSize="50" />
                    </a>
                ))
            }
        </HStack>
    )
}

export default Social

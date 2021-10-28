import { HStack } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icon"
import { useContext } from "react"
import { AppContext } from "context/AppContext"
const Social = () => {
    const { socialNetworks } = useContext(AppContext)
    return (
        <HStack justifyContent="space-between" wrap="wrap" minWidth="50vw" pb="2em">
            {
                socialNetworks?.map((social, i) => (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" key={i}>
                        <Icon as={social.icon} boxSize="3em" />
                    </a>
                ))
            }
        </HStack>
    )
}

export default Social

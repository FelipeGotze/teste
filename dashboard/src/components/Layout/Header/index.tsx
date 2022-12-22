import { Flex, HStack, Image } from "@chakra-ui/react"
import Container from "../Container";
import CustomLink from "./Link";
import Profile from "./Profile";

const Header = () => {
  return (
    <Flex
      h="65px"
      alignItems="center"
      shadow="sm"
    >
      <Container
        px="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src='{logo}' h="40px" />
        <HStack gap={4}>
          <CustomLink text="Dashboard" to="/" />
          <CustomLink text="Cadastro" to="/cadastro" />
        </HStack>
        <Profile />
      </Container>
    </Flex>
  )
}

export default Header;
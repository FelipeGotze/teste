import { Link as ChakraLink } from "@chakra-ui/react"
import { Link, useMatch } from "react-router-dom";

interface ICustomLinkProps {
  text: string;
  to: string;
}

const CustomLink = ({ text, to }: ICustomLinkProps) => {
  return (
    <ChakraLink
      as={Link}
      to={to}
      px="2"
      pb="1"
      _hover={{
        textDecoration: "none",
        color: "purple.700"
      }}
      _after={{
        content: useMatch(to) ? "' '" : "none",
        bgColor: "purple.500",
        width: "100%",
        height: "2px",
        position: "absolute",
        top: "100%",
        left: "0"
      }}
      position="relative"
    >
      {text}
    </ChakraLink>
  )
}

export default CustomLink;
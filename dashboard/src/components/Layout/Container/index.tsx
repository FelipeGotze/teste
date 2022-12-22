import { Box, BoxProps } from "@chakra-ui/react"
import { ReactNode } from "react";

interface ContainerProps extends BoxProps {
  children?: ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box
      w="100%"
      maxW="1200px"
      mx="auto"
      position="relative"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Container;
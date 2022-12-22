
import { ChakraProvider } from "@chakra-ui/react"
import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import { theme } from "./styles/styles";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>

      <Router />

    </BrowserRouter>
  </ChakraProvider>
)

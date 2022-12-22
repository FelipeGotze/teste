import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
)

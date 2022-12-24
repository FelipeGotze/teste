import { FormEvent, useContext, useState } from 'react';
import {
  Flex,
  Box,
  Input,
  Image,
  Link as ChakraLink,
  Stack,
  Button,
  useColorModeValue,
  useToast,
  Text,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Login() {
  const { signIn } = useContext(AuthContext);
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    signIn({
      email,
      password
    }).catch(e => {
      toast({
        title: 'Login mal sucedido!',
        description: "Confira seu e-mail e senha e tente novamente.",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    }).finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <>
      <Flex
        as="form"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        flexDirection="column"
        bg={useColorModeValue('gray.50', 'gray.800')}
        onSubmit={handleLogin}
      >
        <Box
          as={Stack}
          minW="400px"
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={4}
          spacing={4}
          position="relative"
        >
          <Flex justifyContent="center" p="2">
            <Text fontSize="5xl">Car Dealer</Text>
          </Flex>
          <Input
            variant="filled"
            placeholder='E-Mail'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            variant="filled"
            placeholder='Senha'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            bg={'purple.600'}
            color="white"
            _hover={{
              bg: 'purple.700',
            }}
            isLoading={isLoading}
          >
            Login
          </Button>
        </Box>
        <Flex mt="3" gap="3">
          <ChakraLink
            as={Link}
            to="/registro"
            textDecoration="none"
            _hover={{ bgColor: "purple.500", color: "white !important" }}
            px="1"
          >
            Cadastro de Usuário
          </ChakraLink>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
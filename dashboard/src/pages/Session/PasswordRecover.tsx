import { FormEvent, useState } from 'react';
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
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

function PasswordRecover() {
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    api.post("/recuperar-senha", { email })
      .finally(() => {
        toast({
          title: 'Email encaminhado com sucesso!',
          description: "Caso exista esse e-mail em nossa base de dados, você receberá as informações para recuperação de senha.",
          status: 'success',
          isClosable: true,
          position: 'top'
        });
        setIsLoading(false);
        navigate("/login");
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
            <Image src='{logo}' h="40px" />
          </Flex>
          <Input
            variant="filled"
            placeholder='E-mail'
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            Recuperar Senha
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
          <ChakraLink
            as={Link}
            to="/login"
            textDecoration="none"
            _hover={{ bgColor: "purple.500", color: "white !important" }}
            px="1"
          >
            Acessar conta existente
          </ChakraLink>
        </Flex>
      </Flex>
    </>
  );
}

export default PasswordRecover;
import { FormEvent, useState } from 'react';
import {
  Flex,
  Box,
  Input,
  Image,
  Stack,
  Button,
  Link as ChakraLink,
  useColorModeValue,
  useToast,
  SimpleGrid,
  Text,
  Checkbox,
  useDisclosure,
} from '@chakra-ui/react';
import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const toast = useToast();

  const termsDisclosure = useDisclosure();
  const [agreed, setAgreed] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!agreed) {
      toast({
        title: 'Termos de Serviço',
        description: "Você deve concordar com os termos de serviço antes de se cadastrar.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top'
      });
      setIsLoading(false);
      return;
    }

    if (password !== passwordConfirmation) {
      toast({
        title: 'Ops!',
        description: "Os campos Senha e Confirmação de Senha devem ser iguais.",
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top'
      });
      setIsLoading(false);
      return;
    }

    api.post("/register", {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
      .then(() => {
        toast({
          title: 'Cadastro realizado com sucedido!',
          description: "Agora você pode acessar sua conta.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'top'
        });
        navigate("/login");
      })
      .catch(e => {
        toast({
          title: 'Cadastro mal sucedido!',
          description: "Confira suas informações e tente novamente.",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top'
        });
      })
      .finally(() => {
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
        px="4"
      >
        <Box
          as={Stack}
          minW="300px"
          maxW="700px"
          w="100%"
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
          <SimpleGrid columns={[1, 1, 2, 2, 2]} gap="4">
            <Input
              required
              variant="filled"
              placeholder='Nome'
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              required
              variant="filled"
              placeholder='E-mail'
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </SimpleGrid>

          <SimpleGrid columns={[1, 1, 2, 2, 2]} gap="4">
            <Input
              required
              variant="filled"
              placeholder='Senha'
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Input
              required
              variant="filled"
              placeholder='Confirmar Senha'
              type="password"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
          </SimpleGrid>

          <Flex gap="3">
            <Checkbox colorScheme="blue" isChecked={agreed} onChange={() => setAgreed(!agreed)} />
            <Text as="span">
              Confirmo que li e concordo com os <ChakraLink onClick={termsDisclosure.onOpen} textDecoration="none" _hover={{ bgColor: "blue.500", color: "white !important" }} borderBottom="1px solid" borderColor="blue.500" px="1">termos de serviço</ChakraLink>.
            </Text>
          </Flex>

          <Button
            type="submit"
            bg={'blue.600'}
            color="white"
            _hover={{
              bg: 'blue.700',
            }}
            isLoading={isLoading}
          >
            Cadastrar
          </Button>
        </Box>
        <Flex mt="3" gap="3">
          <ChakraLink
            as={Link}
            to="/login"
            textDecoration="none"
            _hover={{ bgColor: "blue.500", color: "white !important" }}
            px="1"
          >
            Acessar conta existente
          </ChakraLink>
        </Flex>
      </Flex>
    </>
  );
}

export default Register;
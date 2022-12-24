import { CloseIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { Link as ChakraLink, useColorModeValue, useDisclosure, Flex, IconButton, HStack, Menu, MenuButton, Button, Avatar, MenuList, MenuItem, MenuDivider, Stack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Container from "../Container";

// const Links = ['Home', 'Loja', 'Sobre nós', 'Contato'];

const Links = [
  {
    titulo: 'Comprar Carro',
    href: '/',
    ext: false
  },
  {
    titulo: 'Vender Carro',
    href: '/',
    ext: false
  },
  {
    titulo: 'App Car Dealer',
    href: '/',
    ext: false
  },

  {
    titulo: 'Sobre nós',
    href: '/',
    ext: false
  },
]

const NavLink = ({ titulo, path, ext }: { titulo: string, path: string, ext: boolean }) => {

  if (ext) {
    return (
      <ChakraLink
        as={'a'}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('#821BBC', '#821BBC'),
          color: 'white',
        }}
        target='_blank'
        href={path}>
        {titulo}
      </ChakraLink>
    )
  }
  return (
    <ChakraLink
      as={Link}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.700', 'blue.700'),
        color: 'white',
      }}
      to={path}>
      {titulo}
    </ChakraLink>
  )
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')}
        padding="16px"
        position="fixed"
        zIndex="1000"
        w='100%'
        top="0">
        <Container>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'} m='auto'>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Text fontSize="5xl">Car Dealer</Text>
              </Box>
            </HStack>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >

              {Links.map((link) => (
                <NavLink key={link.titulo} titulo={link.titulo} path={link.href} ext={link.ext} />
              ))}
            </HStack>

            <Flex alignItems='center'>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src='https://bit.ly/broken-link'
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Acessar Perfil</MenuItem>
                  <MenuDivider />
                  <MenuItem>Cadastre-se</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link.titulo} titulo={link.titulo} path={link.href} ext={link.ext} />
                ))}
              </Stack>
            </Box>
          ) : null}

        </Container>
      </Box>
    </>
  );
}
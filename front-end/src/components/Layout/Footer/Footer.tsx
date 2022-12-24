import { Flex, Image, Text, Link as ChakraLink, useBreakpointValue, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export function Footer() {

    const isMobileVersion = useBreakpointValue({
        base: true,
        md: false
    });

    return (
        <Flex
            direction={isMobileVersion ? 'column' : 'row'}
            alignItems='center'
            p='16px'
            px={isMobileVersion ? '10px' : '120px'}
            bgColor="blue.700"
            gap="4"
            color="#fff"
        >
            <Flex direction="column" w="34%" alignItems="center" gap='8px'>
                <Text as='b'> Comprar carro</Text>
                <Text>Vender carro</Text>
                <Text>App Kavak</Text>
                <Text>Onde estamos</Text>
            </Flex>
            <Flex direction="column" w="33%" gap="8px;" alignItems="center">
                <Text>Perguntas frequentes</Text>
                <Text>Blog</Text>
                <Text>Carreiras</Text>
                <Text>Contato</Text>
            </Flex>
            <Flex w="33%" alignItems="center" direction="column">
                <Text as='b' display="block" mb="16px">Contato</Text>
                <Text>Imprensa</Text>
                <Text>Brasil 🇧🇷</Text>
            </Flex>

        </Flex >

    )
}
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CarProps {
    name: string,
    image: string,
    model: string,
    brand: string,
    price: number
}
const Car = ({
    image,
    name,
    model,
    brand,
    price
}: CarProps) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='6'>
                    <Heading size='md' margin="auto">{name}</Heading>
                    <Text fontSize='xs' color='gray.400' align='center'>{model}</Text>
                    <Text color='blue.600' fontSize='2xl' align="center" marginTop='16px'>
                        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
        </Card>
    )
}

export default Car;
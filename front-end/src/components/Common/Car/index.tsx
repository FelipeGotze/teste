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
                    src='https://www.seat.com.mt/content/dam/public/seat-website/carworlds/compare/default-image/ghost.png'
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' margin="auto">{name}</Heading>
                    <Text align="center" color="gray.400" fontSize="sm">{model}</Text>
                    <Text color='blue.600' fontSize='2xl' align="center">
                        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
        </Card>
    )
}

export default Car;
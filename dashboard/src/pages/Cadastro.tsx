import { Button, Flex, Input, SimpleGrid, useColorModeValue, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarTable from "../components/Layout/CarTable";
import { api } from "../services/api";



function Cadastro() {
    const toast = useToast();
    const navigate = useNavigate();


    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [brand, setBrand] = useState<string>("");
    const [price, setPrice] = useState<string>("");



    const handleCadastro = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        api.post("/create-car", {
            name,
            model,
            brand,
            price,
        }).then(() => {
            toast({
                title: 'Cadastro realizado com sucedido!',
                description: "",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top'
            });
            navigate("/");
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
                align={'center'}
                justify={'center'}
                flexDirection="column"
                bg={useColorModeValue('gray.50', 'gray.800')}
                onSubmit={handleCadastro}
                gap="4"
            >
                <h1>Cadastre novo veículo</h1>
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
                        placeholder='Modelo'
                        type="text"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2, 2, 2]} gap="4">
                    <Input
                        required
                        variant="filled"
                        placeholder='Marca'
                        type="text"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                    <Input
                        required
                        variant="filled"
                        placeholder='Preço'
                        type="string"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </SimpleGrid>
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
            </Flex>

            <CarTable />

        </>
    )
}

export default Cadastro;
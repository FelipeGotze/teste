import { Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { useEffect, useState, FormEvent } from "react";
import { api } from "../../../services/api";
import Title from "../../Common/Title";
import UpdateModal from "../../Common/UpdateModal";
import { useNavigate } from "react-router-dom";


interface CarProps {
    id: number,
    name: string,
    model: string,
    brand: string,
    price: number,
    image: string,
}

function CarTable() {
    const toast = useToast();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [carList, setCars] = useState<CarProps[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);

    const deleteCar = async (id: number) => {
        setIsLoading(true);

        api.post("/remove-car", {
            id
        }).then(() => {
            toast({
                title: 'Cadastro excluído com sucesso!',
                description: "",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            navigate('/cadastro');
        })
            .catch(() => {
                toast({
                    title: 'Erro!',
                    description: "Confira suas informações e tente novamente.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        api.get('/get-cars')
            .then(response => {
                const total = response.data.data.reduce(
                    (accumulator: number, currentValue: any) => accumulator + currentValue.price,
                    0
                );
                setCars(response.data.data);
                setTotalValue(total);
            });
    }, []);


    return (
        <>
            <TableContainer>
                <Title title="Veículos Cadastrados" />
                <Table size='sm' variant="striped">
                    <Thead>
                        <Tr>
                            <Th>Carro</Th>
                            <Th>Modelo</Th>
                            <Th>Marca</Th>
                            <Th>Preço</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            carList.map((car) => (
                                <Tr>
                                    <Td>{car.name}</Td>
                                    <Td>{car.model}</Td>
                                    <Td>{car.brand}</Td>
                                    <Td>{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Td>
                                    <Td>
                                        <UpdateModal
                                            tipo="Alterar"
                                            id={car.id}
                                            name={car.name}
                                            model={car.model}
                                            brand={car.brand}
                                            price={car.price.toString()}
                                        />
                                        <Button marginLeft="8px;" onClick={() => deleteCar(car.id)} colorScheme='red'>Excluir</Button>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th colSpan={2}></Th>
                            <Th isNumeric>Total:</Th>
                            <Th>{totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}

export default CarTable;
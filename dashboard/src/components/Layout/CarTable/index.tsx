import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

interface CarProps {
    id: number,
    name: string,
    model: string,
    brand: string,
    price: number,
    image: string,
}

function CarTable() {

    const [carList, setCars] = useState<CarProps[]>([]);
    const [totalValue, setTotalValue] = useState<number>(0);

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
        <TableContainer>
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
                                <Td>Alterar | Excluir</Td>
                            </Tr>
                        ))
                    }

                </Tbody>
                <Tfoot>
                    <Th colSpan={2}></Th>
                    <Th isNumeric>Total:</Th>
                    <Th>{totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Th>
                    <Th></Th>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default CarTable;
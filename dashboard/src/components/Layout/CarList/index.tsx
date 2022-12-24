import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Car from "../../Common/Car";
import Title from "../../Common/Title";
import { api } from "../../../services/api";

interface CarProps {
    id: number,
    name: string,
    model: string,
    brand: string,
    price: number,
    image: string,
}

const CarList = () => {
    const [carList, setCars] = useState<CarProps[]>([]);

    useEffect(() => {
        api.get('/get-cars')
            .then(response => {
                setCars(response.data.data);
            });
    }, []);

    return (
        <Flex marginTop='16px' flexDirection='column'>
            <Title title="Ultimos Carros cadastrados" />
            <SimpleGrid columns={5} spacing={4}>
                {carList.map((car) => (
                    <Car key={car.id} image={car.image} name={car.name} brand={car.brand} model={car.model} price={car.price} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default CarList;
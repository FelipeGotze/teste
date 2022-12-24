import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Input, InputGroup, InputRightElement, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import Car from "../../Common/Car";

interface CarProps {
    id: number,
    name: string,
    model: string,
    brand: string,
    price: number,
    image: string,
}

const CarList = () => {
    const query = useState<string>("")
    const [cars, setCars] = useState<CarProps[]>([]);
    const [carList, setCarsList] = useState<CarProps[]>([]);

    useEffect(() => {
        api.get('/get-cars')
            .then(response => {
                setCarsList(response.data.data);
                setCars(response.data.data);
            });
    }, []);

    function filterCars(e: any) {
        const updatedCars = cars.filter(car => {
            return car.name.toUpperCase().includes(e.target.value.toUpperCase()) || car.model.toUpperCase().includes(e.target.value.toUpperCase())
        });
        setCarsList(updatedCars);
    }

    return (
        <Flex direction="column" gap={4} marginTop="150px;" padding="30px">
            <Box w='100%'>
                <InputGroup w="800px" margin="auto">
                    <InputRightElement
                        pointerEvents='none'
                        children={<Search2Icon color='gray.300' />}
                    />
                    <Input
                        type='text'
                        placeholder='Busque por marca ou modelo'
                        onChange={e => filterCars(e)}
                    />
                </InputGroup>
            </Box>
            <SimpleGrid w="100%" columns={4} spacing={4}>
                {carList.map(car => (
                    <Car key={car.id} image={car.image} name={car.name} brand={car.brand} model={car.model} price={car.price} />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default CarList;
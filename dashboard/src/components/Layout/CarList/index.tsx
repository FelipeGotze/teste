import { SimpleGrid } from "@chakra-ui/react";
import Car from "../../Common/Car";

const Cars = [
    {
        id: 1,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 2,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 3,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 4,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 5,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 6,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 7,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 8,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
    {
        id: 9,
        image: "",
        name: "car 1",
        model: "hatch",
        brand: "Nissan",
        price: "75.000,00"
    },
];

const CarList = () => {
    return (
        <SimpleGrid columns={4} spacing={4}>
            {Cars.map((car) => (
                <Car key={car.id} image={car.image} name={car.name} brand={car.brand} model={car.model} price={car.price} />
            ))}
        </SimpleGrid>
    )
}

export default CarList;
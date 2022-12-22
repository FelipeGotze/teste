import { Flex } from "@chakra-ui/react";
import CarList from "../components/Layout/CarList";


const Home = () => {
    return (
        <Flex marginTop="150px;" padding="30px">
            <CarList />
        </Flex>
    )
}

export default Home;
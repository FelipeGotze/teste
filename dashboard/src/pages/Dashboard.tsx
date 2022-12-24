import { Flex } from "@chakra-ui/react";
import CarList from "../components/Layout/CarList";

const Dashboard = () => {

  return (
    <Flex gap="4" direction="column">

      <CarList />

    </Flex>
  )
}

export default Dashboard;
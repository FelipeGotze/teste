import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Checkbox,
  Flex,
  Input,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { api } from "../services/api";

interface IWorkerProps {
  workerId: number,
  workerName: string,
  hashRate: number,
  dayHashRate: number,
  rejectRate: number,
  lastShareTime: string,
  status: string,
  checked: boolean
}

const Workers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workersList, setWorkers] = useState<IWorkerProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMesage] = useState("");

  useEffect(() => {
    api.get('/workers')
      .then(response => {
        setWorkers(response.data.data.workerDatas);
        setIsLoading(false);

        if (response.data.code) {
          if (response.data.code === -2008) {
            setAlertMesage("API Key Inválida.");
          } else {
            setAlertMesage("Erro inesperado ao carregar as informações, tente novamente em alguns minutos.")
          }

          setShowAlert(true);
          return;
        }
      });
  }, []);
  // {
  //   "code": 0,
  //   "msg": "",
  //   "data": {
  //     "workerDatas": [
  //       {
  //         "workerId": "1420554439452400131",  //Miner ID
  //         "workerName": "2X73",               //Miner's name  
  //         "status": 3,                        // Status：1 valid, 2 invalid, 3 no longer valid
  //         "hashRate": 0,                      // Real-time rate
  //         "dayHashRate": 0,                   //24H Hashrate
  //         "rejectRate": 0,                    //Real-time Rejection Rate
  //         "lastShareTime": 1587712919000      // Last submission time 
  //       },
  //       {
  //         "workerId": "7893926126382807951",
  //         "workerName": "AZDC1.1A10101",
  //         "status": 2,
  //         "hashRate": 29711247541680,
  //         "dayHashRate": 12697781298013.66,
  //         "rejectRate": 0,
  //         "lastShareTime": 1587969727000
  //       }
  //     ],
  //     "totalNum": 18530,           // Total amount
  //     "pageSize": 20               // Rows per page
  //   }
  // }

  const allChecked = workersList.map(el => el.checked).every(Boolean);
  const isIndeterminate = workersList.map(el => el.checked).some(Boolean) && !allChecked;

  const checkAllWorkers = (isChecked: boolean) => {
    const updatedWorkers = workersList.map(el => ({
      ...el,
      checked: isChecked
    }));
    setWorkers(updatedWorkers);
  }

  const setCheckedWorker = (isChecked: boolean, workerIndex: number) => {
    const updatedWorkers = workersList.map((el, i) => ({
      ...el,
      checked: workerIndex === i
        ? isChecked
        : workersList[i].checked
    }));
    setWorkers(updatedWorkers);
  }

  return (
    <Flex direction="column" gap={4}>
      {
        showAlert && (
          <Alert status='error' borderRadius="md">
            <AlertIcon />
            <AlertTitle>Atenção!</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        )
      }
      <Stack direction="row" gap={4}>
        <Input
          maxW="25%"
          variant="flushed"
          colorScheme="purple"
          placeholder='Pesquisar'
          size="sm"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
        <Flex></Flex>
        <Flex></Flex>
        <Flex></Flex>
      </Stack>
      <TableContainer>
        <Table variant='striped' size="sm">
          <Thead>
            <Tr>
              <Th maxW={0}>
                <Checkbox
                  colorScheme="purple"
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={e => checkAllWorkers(e.target.checked)}
                />
              </Th>
              <Th>Workers</Th>
              <Th>Hashrate Real</Th>
              <Th>24H</Th>
              <Th>Rejeitar</Th>
              <Th>último Compartilhamento</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              isLoading ? (
                <Tr>
                  <Td py="10" colSpan={6} textAlign="center">
                    <Spinner color='purple.500' />
                  </Td>
                </Tr>
              ) : (workersList.length > 0) ? (
                workersList.map((worker, index) => (
                  <Tr key={worker.workerId}>
                    <Td>
                      <Checkbox
                        colorScheme="purple"
                        isChecked={worker.checked}
                        onChange={(e) => setCheckedWorker(e.target.checked, index)}
                      />
                    </Td>
                    <Td>{worker.workerName}</Td>
                    <Td>{worker.hashRate} Th/s</Td>
                    <Td>{worker.dayHashRate} Th/s</Td>
                    <Td>{worker.rejectRate}</Td>
                    <Td>{worker.lastShareTime}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td py="10" colSpan={6} textAlign="center">Nenhum worker encontrado.</Td>
                </Tr>
              )
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}

export default Workers;
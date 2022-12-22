import {
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

interface IWorkerProps {
  workers: string,
  hashrate: number,
  past24H: number,
  rejected: number,
  lastShared: string,
  status: string,
  checked: boolean
}

const workersList: IWorkerProps[] = [
  {
    workers: "001",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "002",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "003",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "004",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "005",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "006",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "007",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "008",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "009",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "010",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "011",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "012",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
  {
    workers: "013",
    hashrate: 60.05,
    past24H: 36.6,
    rejected: 0.00,
    lastShared: "2022-11-22 14:28:18",
    status: "active",
    checked: false
  },
]

const Ganhos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [workers, setWorkers] = useState<IWorkerProps[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setWorkers(workersList);
      setIsLoading(false);
    }, 1000);
  }, [query]);

  const allChecked = workers.map(el => el.checked).every(Boolean);
  const isIndeterminate = workers.map(el => el.checked).some(Boolean) && !allChecked;

  useEffect(() => {
    setWorkers(
      workersList.filter(el => el.workers.includes(query))
    );
  }, [query])

  const checkAllWorkers = (isChecked: boolean) => {
    const updatedWorkers = workers.map(el => ({
      ...el,
      checked: isChecked
    }));
    setWorkers(updatedWorkers);
  }

  const setCheckedWorker = (isChecked: boolean, workerIndex: number) => {
    const updatedWorkers = workers.map((el, i) => ({
      ...el,
      checked: workerIndex === i
        ? isChecked
        : workers[i].checked
    }));
    setWorkers(updatedWorkers);
  }

  return (
    <Flex direction="column" gap={4}>
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
              ) : (workers.length > 0) ? (
                workers.map((worker, index) => (
                  <Tr key={worker.workers}>
                    <Td>
                      <Checkbox
                        colorScheme="purple"
                        isChecked={worker.checked}
                        onChange={(e) => setCheckedWorker(e.target.checked, index)}
                      />
                    </Td>
                    <Td>{worker.workers}</Td>
                    <Td>{worker.hashrate} Th/s</Td>
                    <Td>{worker.past24H} Th/s</Td>
                    <Td>{worker.rejected}</Td>
                    <Td>{worker.lastShared}</Td>
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

export default Ganhos;
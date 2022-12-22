import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Title from "../components/Common/Title";
import HashrateWidget from "../components/Common/HashrateWidget";
import WorkerWidget from "../components/Common/WorkerWidget";
import IncomeWidget from "../components/Common/IncomeWidget";
import { api } from "../services/api";

const cars = [
  {
    name: "Própria",
    model: "area",
    data: [750.68, 690.06, 747.83, 744.62, 737.93, 750.44, 750.99, 752.10, 743.22],
    color: '#5a529c'
  }, {
    name: "Rejeitar",
    type: "area",
    data: [0, 0.16, 0.12, 0, 0.16, 0.12, 0, 0.16, 0.12],
    color: '#38a169'
  }
];

const options = {
  chart: {
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2
  },
  xaxis: {
    categories: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  },
  yaxis: {
    title: {
      text: 'Th/s',
      labels: {
        formatter: function (value: number) {
          return value + "$";
        }
      },
    }
  },
  fill: {
    opacity: 1
  }
};

interface StatsProps {
  fifteenMinHashRate: number,
  dayHashRate: number,
  validNum: number,
  invalidNum: number,
  profitToday: {
    BTC: number
  },
  profitYesterday: {
    BTC: number
  },
  userName: string;
  unit: string;
  algo: string;
}

const Dashboard = () => {
  const responsiveColumns = [1, 1, 1, 2, 2];
  const [stats, setStats] = useState<StatsProps>();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMesage] = useState("");

  // useEffect(() => {
  //   api.get('/stats')
  //     .then(response => {
  //       setStats(response.data.data);

  //       if (response.data.code) {
  //         if (response.data.code === -2008) {
  //           setAlertMesage("API Key Inválida.");
  //         } else {
  //           setAlertMesage("Erro inesperado ao carregar as informações, tente novamente em alguns minutos.")
  //         }

  //         setShowAlert(true);
  //         return;
  //       }
  //     });
  // }, []);

  return (
    <Flex gap="4" direction="column">

      {
        showAlert && (
          <Alert status='error' borderRadius="md">
            <AlertIcon />
            <AlertTitle>Atenção!</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        )
      }



    </Flex>
  )
}

export default Dashboard;
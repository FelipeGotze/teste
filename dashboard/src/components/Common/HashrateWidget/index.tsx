import { Box, Flex, Icon, Skeleton, Text, Tooltip, WrapItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsClockHistory } from "react-icons/bs";

interface HashrateWidgetProps {
  frequencyText: string;
  frequencyTooltip: string | ReactNode;
  hashRate: number | undefined;
  hashRateTransfer: number | undefined;
}

const HashrateWidget = ({
  frequencyText,
  frequencyTooltip,
  hashRate,
  hashRateTransfer
}: HashrateWidgetProps) => {
  return (

    <Flex gap="4">
      <Icon
        as={BsClockHistory}
        color="#5a529c"
        w="36px"
        h="36px"
        mt="3"
      />
      <Box>
        <WrapItem>
          <Tooltip hasArrow textAlign="justify" label={frequencyTooltip}>
            <Text
              as="small"
              color="gray.500"
              borderBottom="1px dashed"
              borderColor="gray.400"
            >
              {frequencyText}
            </Text>
          </Tooltip>
        </WrapItem>
        <Text
          display="flex"
          fontSize="xl"
          fontWeight="medium"
        >
          {hashRate ? (hashRate / 1000000000000).toFixed(2) : <Skeleton mt="2" mr="1.5" w="70px" height='16px' />} Th/s
        </Text>
        <Text as="small" color="gray.500">
          Transferido (saída) <Text as="span" color="blue.400">{hashRateTransfer} Th/s</Text>
        </Text>
      </Box>
    </Flex>
  )
}

export default HashrateWidget;
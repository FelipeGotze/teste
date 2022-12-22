import { Box, Flex, Icon, Skeleton, Text, Tooltip, WrapItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiCalendarFill } from "react-icons/ri";

interface IncomeWidgetProps {
  type: "today" | "yeasterday";
  value: number | undefined;
  tooltipText: string | ReactNode;
}

const IncomeWidget = ({
  type,
  value,
  tooltipText
}: IncomeWidgetProps) => {
  return (

    <Flex gap="4">
      <Icon
        as={RiCalendarFill}
        color={"#5a529c"}
        w="36px"
        h="36px"
        mt="3"
      />
      <Box>
        <WrapItem>
          <Tooltip hasArrow textAlign="justify" label={tooltipText}>
            <Text
              as="small"
              color="gray.500"
              borderBottom="1px dashed"
              borderColor="gray.400"
            >
              Ganhos estimados {type === "today" ? "hoje" : "ontem"}
            </Text>
          </Tooltip>
        </WrapItem>
        <Text
          fontSize="xl"
          fontWeight="medium"
          display="flex"
        >
          {typeof value !== 'undefined' ? value : <Skeleton mt="2" mr="1.5" w="70px" height='16px' />} BTC
        </Text>
      </Box>
    </Flex>
  )
}

export default IncomeWidget;
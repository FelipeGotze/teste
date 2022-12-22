import { Box, Flex, Icon, Skeleton, Text, Tooltip, WrapItem } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsFillPatchCheckFill, BsFillPatchExclamationFill } from "react-icons/bs";

interface WorkerWidgetProps {
  type: "check" | "exclamation";
  value: number | undefined;
  tooltipText: string | ReactNode;
}

const WorkerWidget = ({
  type,
  value,
  tooltipText
}: WorkerWidgetProps) => {
  return (

    <Flex gap="4">
      <Icon
        as={type === "check" ? BsFillPatchCheckFill : BsFillPatchExclamationFill}
        color={type === "check" ? "green.500" : "red.500"}
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
              {type === "check" ? "Ativo" : "Inativo"}
            </Text>
          </Tooltip>
        </WrapItem>
        <Text
          fontSize="xl"
          fontWeight="medium"
          display="flex"
        >
          {typeof value !== 'undefined' ? value : <Skeleton mt="2" mr="1.5" w="70px" height='16px' />}
        </Text>
      </Box>
    </Flex>
  )
}

export default WorkerWidget;

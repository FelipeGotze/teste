import { WrapItem, Tooltip, Heading } from "@chakra-ui/react"
import { ReactNode } from "react";

interface TitleProps {
  title: string;
  tooltipText?: ReactNode | string;
}

const Title = ({ tooltipText, title }: TitleProps) => {
  if (!tooltipText) {
    return (
      <Heading
        as="h2"
        mb="3"
        fontWeight="500"
        fontSize="20px"
      >
        {title}
      </Heading>
    )
  }

  return (
    <WrapItem>
      <Tooltip hasArrow textAlign="justify" label={tooltipText}>
        <Heading
          as="h2"
          mb="3"
          fontWeight="500"
          fontSize="20px"
          borderBottom="1px dashed"
          borderColor="gray.400"
        >
          {title}
        </Heading>
      </Tooltip>
    </WrapItem>
  )
}

export default Title;
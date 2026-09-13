import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import LineWithCircle from "@/components/timeline/LineWithCircle";

const TimeLineItem = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  const arrowColor = useColorModeValue("#edf2f6", "#2d3748");

  return (
    <Flex
      ref={ref}
      mb="10px"
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 1s ease ${1 / 10}s`,
      }}
    >
      <LineWithCircle />

      <HStack
        p={{ base: 3, sm: 6 }}
        bg={backgroundColor}
        rounded="lg"
        alignItems="center"
        pos="relative"
        w="100%"
        _before={{
          content: `""`,
          w: "0",
          h: "0",
          borderColor: `transparent ${arrowColor} transparent`,
          borderStyle: "solid",
          borderWidth: "15px 15px 15px 0",
          position: "absolute",
          left: "-15px",
          display: "block",
        }}
      >
        <Box>{children}</Box>
      </HStack>
    </Flex>
  );
};

export default TimeLineItem;

import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Flex, HStack } from "@chakra-ui/react";
import LineWithCircle from "@/components/timeline/LineWithCircle";

const TimeLineItem = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        bg={"gray.100"}
        rounded="lg"
        alignItems="center"
        pos="relative"
        w="100%"
        _before={{
          content: `""`,
          w: "0",
          h: "0",
          borderColor: `transparent #edf2f6 transparent`,
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

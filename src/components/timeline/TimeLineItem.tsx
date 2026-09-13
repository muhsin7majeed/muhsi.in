import { ReactNode, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Box, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import LineWithCircle from "@/components/timeline/LineWithCircle";

const TimeLineItem = ({ children, isCurrent = false }: { children: ReactNode; isCurrent?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const isVisible = Boolean(shouldReduceMotion || isInView);
  const backgroundColor = useColorModeValue("gray.100", "gray.700");
  const arrowColor = useColorModeValue("#edf2f6", "#2d3748");

  return (
    <Flex
      ref={ref}
      mb="10px"
      style={{
        transform: isVisible ? "none" : "translateY(20px)",
        opacity: isVisible ? 1 : 0,
        transition: shouldReduceMotion ? "none" : "transform 0.5s ease, opacity 0.5s ease",
      }}
    >
      <LineWithCircle isVisible={isVisible} isCurrent={isCurrent} reduceMotion={Boolean(shouldReduceMotion)} />

      <HStack
        p={{ base: 3, sm: 6 }}
        bg={backgroundColor}
        rounded="lg"
        alignItems="center"
        pos="relative"
        w="100%"
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
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

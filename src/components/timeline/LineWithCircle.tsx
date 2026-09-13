import { Box, Flex, chakra, useColorModeValue } from "@chakra-ui/react";

interface LineWithCircleProps {
  isVisible: boolean;
  isCurrent: boolean;
  reduceMotion: boolean;
}

const LineWithCircle = ({ isVisible, isCurrent, reduceMotion }: LineWithCircleProps) => {
  const lineColor = useColorModeValue("gray.200", "gray.600");
  const circleBackground = useColorModeValue("white", "gray.800");

  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={lineColor}
        top="0px"
        transform={isVisible ? "scaleY(1)" : "scaleY(0)"}
        transformOrigin="top"
        transition={reduceMotion ? "none" : "transform 0.45s ease"}
      />

      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor={circleBackground}
          borderRadius="100px"
          border="3px solid"
          borderColor="primary.500"
          backgroundImage="none"
          opacity={isVisible ? 1 : 0}
          transform={isVisible ? "scale(1)" : "scale(0.5)"}
          transition={reduceMotion ? "none" : "transform 0.3s ease 0.15s, opacity 0.3s ease 0.15s"}
          animation={isCurrent && isVisible && !reduceMotion ? "timelinePulse 2.8s ease-in-out infinite" : undefined}
        />
      </Box>
    </Flex>
  );
};

export default LineWithCircle;

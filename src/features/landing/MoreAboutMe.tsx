import { useRef } from "react";
import { useInView } from "framer-motion";
import { VStack, Box, Link, Flex, chakra, HStack, Icon, Text, Button } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

import { TIMELINE_DATA } from "@/__DATA__/timeline";
import LineWithCircle from "@/components/timeline/LineWithCircle";
import TimelineIcon from "@/components/svgs/TimelineIcon";

const MoreAboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex alignItems="center" gap={8} mt={24} direction={["column-reverse", "column-reverse", "row"]}>
      <Box w="100%" ref={ref}>
        {TIMELINE_DATA.map((item, index) => (
          <Flex
            key={item.id}
            mb="10px"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: `all 1s ease ${index / 10}s`,
            }}
          >
            <LineWithCircle />

            <HStack
              p={{ base: 3, sm: 6 }}
              bg={"gray.100"}
              spacing={5}
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
              <Icon as={item.icon} w={12} h={12} color="primary.500" />

              <Box>
                <VStack spacing={2} mb={3} textAlign="left">
                  <chakra.h2 fontSize={["md", null, "lg"]} w="100%">
                    {item.date}
                  </chakra.h2>

                  <chakra.h1 fontSize={["lg", null, "2xl"]} lineHeight={1.2} fontWeight="bold" w="100%">
                    {item.title}
                  </chakra.h1>

                  <Text fontSize="md">{item.description}</Text>
                </VStack>

                {item.link && (
                  <Button
                    as={Link}
                    variant={"outline"}
                    colorScheme="secondary.500"
                    rightIcon={<BiLinkExternal />}
                    href={item.link}
                    target="_blank"
                    _hover={{
                      bgColor: "secondary.500",
                      color: "#fff",
                    }}
                  >
                    Visit
                  </Button>
                )}
              </Box>
            </HStack>
          </Flex>
        ))}
      </Box>

      <Box w="70%">
        <TimelineIcon />
      </Box>
    </Flex>
  );
};

export default MoreAboutMe;

import { Suspense, lazy, useState } from "react";
import { Stack, Heading, Button, Flex, Box, Text, Image, Spinner } from "@chakra-ui/react";
import { Application } from "@splinetool/runtime";

import ScrollDownIndicator from "@/components/scroll-indicator/ScrollDownIndicator";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const HeroSection = () => {
  const onSplineLoad = (spline: Application) => {};

  return (
    <Box pos="relative" minHeight={"90vh"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Write once,
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even
            sync them in the cloud so you can use them anywhere. All that is free!
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              Get started
            </Button>
          </Stack>
        </Stack>

        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Box rounded={"2xl"} width={"full"}>
            <Suspense
              fallback={
                <Box textAlign={"center"}>
                  <Spinner />
                </Box>
              }
            >
              <Spline
                onLoad={onSplineLoad}
                style={{ minHeight: 620 }}
                scene="https://prod.spline.design/3c6xGop7mfOrKuf7/scene.splinecode"
              />
            </Suspense>
          </Box>
        </Flex>
      </Stack>

      {/* <Box pos="absolute" bottom={"10vh"} left="50%" transform={"translate(-50%)"}>
        <ScrollDownIndicator scrollToId="#skills_section" />
      </Box> */}
    </Box>
  );
};

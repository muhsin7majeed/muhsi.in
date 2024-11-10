import { Box, Container, Flex, Heading, Link, Text, chakra } from "@chakra-ui/react";
import TimeLineItem from "@/components/timeline/TimeLineItem";
import TimelineIcon from "@/components/svgs/TimelineIcon";

const Experiences = () => {
  return (
    <Container maxW={"7xl"} mb={24} as="section">
      <Heading fontSize={"4xl"} mb={4}>
        Experience
      </Heading>

      <Flex alignItems="center" gap={8} mt={24} direction={["column-reverse", "column-reverse", "row"]}>
        <Box w="100%">
          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>Oct 2019 - Nov 2021</chakra.h2>

              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                Frontend Engineer at{" "}
                <Link href="https://techwarelab.com/" target="_blank" textDecoration="underline" color="primary.500">
                  Techwarelab
                </Link>
              </chakra.h1>

              <Text fontSize="md">
                At Techwarelab, I worked for 2 years as a frontend developer, where I built multiple projects from the
                ground up using React, Angular 2+, and Ionic. I was responsible for delivering complete solutions
                independently, ensuring the projects met both functional and design requirements.
              </Text>
            </Box>
          </TimeLineItem>

          <TimeLineItem>
            <Box>
              <chakra.h2 fontSize={["md", null, "lg"]}>Nov 2021 - Present</chakra.h2>

              <chakra.h1 fontSize={["lg", null, "2xl"]} mb="2" fontWeight="bold">
                Software Engineer at{" "}
                <Link href="https://www.springworks.in/" target="_blank" textDecoration="underline" color="primary.500">
                  Springworks
                </Link>
              </chakra.h1>

              <Text fontSize="md">
                At Springworks, I worked as a Software Engineer on Horizon360, a business management software developed
                for Toro Company. I contributed to building new features, fixing bugs, and optimizing the app’s
                performance using React. I also mentored interns, updated the codebase, and introduced new development
                tools to enhance efficiency and speed.
              </Text>
            </Box>
          </TimeLineItem>
        </Box>

        <Box w="70%">
          <TimelineIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default Experiences;

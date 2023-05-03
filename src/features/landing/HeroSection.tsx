import { Box, Button, Container, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar/Navbar";
import HeroIcon from "@/components/svgs/HeroIcon";

const HeroSection = () => {
  return (
    <Container maxW={"7xl"} className="hero__section" mb={[8, 4, 0]} pb={[24, 0, 0]}>
      <Navbar />

      <Flex alignItems="center" gap={4} direction={["column-reverse", "column-reverse", "row"]} minH={"100vh"}>
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%">
          <Heading fontSize={"4xl"} mb={4}>
            The Art of
            <Text as="span" ml="3" color="primary.500">
              Web Development:
            </Text>
            <br /> Blending Design and Functionality to Perfection
          </Heading>

          <Text mb={4} fontSize={"2xl"}>
            I’m a web dev specialized in JavaScript. I’m just swimming through endless libraries and frameworks of
            javascript to find something that can{" "}
            <Link
              textDecoration={"underline"}
              color="primary.500"
              target="__blank"
              href="https://www.youtube.com/watch?v=B8C5sjjhsso"
            >
              make the world a better place
            </Link>
            . Besides coding I love videogames, music and drawing.
          </Text>

          <Flex alignItems="center" gap={4}>
            <Button colorScheme="primary">Get in touch</Button>
            <Button colorScheme="primary" variant="outline">
              Résumé
            </Button>
          </Flex>
        </Flex>

        <Box w="100%">
          <HeroIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;

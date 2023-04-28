import { Box, Button, Container, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar/Navbar";
import HeroIcon from "@/components/svgs/HeroIcon";

const HeroSection = () => {
  return (
    <Container maxW={"7xl"} height={"100vh"} className="hero__section">
      <Navbar />

      <Flex alignItems="center" gap={4} direction={["column-reverse", "column-reverse", "row"]} h="90%">
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%" h="100%">
          <Heading fontSize={"4xl"} mb={4}>
            The Art of Web Development{" "}
            <Text as="span" color="primary">
              :
            </Text>{" "}
            <br /> Blending Design and Functionality to Perfection
          </Heading>

          <Text mb={4} fontSize={"2xl"} color={"blackAlpha.600"}>
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
            <Button colorScheme="secondary">Get in touch</Button>
            <Button colorScheme="secondary" variant="outline">
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

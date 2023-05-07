import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, Container, Flex, Heading, Img, Link, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar/Navbar";
import HeroIcon from "@/components/svgs/HeroIcon";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container maxW={"7xl"} className="hero__section" mb={[8, 4, 0]} pb={[24, 0, 0]}>
      <Navbar />

      <Flex
        alignItems="center"
        gap={4}
        direction={["column-reverse", "column-reverse", "row"]}
        minH={"100vh"}
        ref={ref}
      >
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%">
          <Heading
            fontSize={"4xl"}
            mb={4}
            style={{
              transform: isInView ? "none" : "translateY(-100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            The Art of
            <Text as="span" ml="3" color="primary.500">
              Web Development:
            </Text>
            <br /> Blending Design and Functionality to Perfection!
          </Heading>

          <Text
            mb={4}
            fontSize={"2xl"}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s ease 0.5s",
            }}
          >
            I’m a web dev specialized in JavaScript. I’m just swimming through endless libraries and frameworks of
            javascript to find something that can{" "}
            <Link
              textDecoration={"underline"}
              color="primary.500"
              target="_blank"
              href="https://www.youtube.com/watch?v=B8C5sjjhsso"
            >
              make the world a better place
            </Link>
            . Besides coding I love videogames, music and traveling.
          </Text>

          <Flex alignItems="center" gap={4}>
            <Button
              colorScheme="primary"
              as={Link}
              href="mailto:me@muhsi.in"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
              Get in touch
            </Button>
            <Button
              colorScheme="primary"
              variant="outline"
              as={Link}
              href="/resume.pdf"
              target="_blank"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "transform 1s ease 0.5s, opacity 1s ease 0.5s",
              }}
            >
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

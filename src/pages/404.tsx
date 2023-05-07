import { Box, Button, Container, Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import FourNotFourIcon from "@/components/svgs/FourNotFourIcon";
import Navbar from "@/components/navbar/Navbar";

const Custom404 = () => {
  return (
    <Container maxW={"7xl"} className="hero__section" mb={[8, 4, 0]} pb={[24, 0, 0]}>
      <Navbar />

      <Flex alignItems="center" gap={4} minH={"100vh"}>
        <Flex direction="column" alignItems="center" justifyContent="center" w="100%">
          <Box w={["80%", "60%", "60%"]} maxW="600px" minW="300px" textAlign="center">
            <FourNotFourIcon />

            <Button
              leftIcon={<BsArrowLeftCircleFill />}
              as={NextLink}
              href="/"
              colorScheme="pink"
              variant="solid"
              my={16}
            >
              Go Home
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Custom404;

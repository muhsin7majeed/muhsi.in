import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container maxW={"7xl"} className="hero__section" mb={[8, 4, 0]} pb={[24, 0, 0]} as="nav">
      <Flex
        py={[4, 8, 8]}
        borderBottom={"2px solid"}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text
          fontSize={22}
          as={Link}
          href="/"
          fontWeight={"black"}
          _hover={{ color: "blackAlpha.700", bgColor: "initial" }}
          fontFamily={"poppins"}
        >
          Muhsin A
        </Text>
      </Flex>
    </Container>
  );
};

export default Navbar;

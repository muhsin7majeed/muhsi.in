import { Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import RocketLaunch from "../RocketLaunch";

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"7xl"} mb={[8, 4, 0]} pb={[24, 0, 0]} as="nav">
      <Flex
        py={[4, 8, 8]}
        borderBottom={"2px dashed"}
        borderColor={"gray.100"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text
          fontSize={22}
          as={Link}
          href="/"
          fontWeight={"semibold"}
          _hover={{ color: "blackAlpha.700", bgColor: "initial" }}
        >
          Muhsin A
        </Text>

        {/* <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button> */}

        <RocketLaunch />
      </Flex>
    </Container>
  );
};

export default Navbar;

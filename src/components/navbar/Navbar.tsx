import { Container, Flex, HStack, IconButton, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import RocketLaunch from "../RocketLaunch";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.100", "gray.700");
  const hoverColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700");

  return (
    <Container maxW={"7xl"} mb={[8, 4, 0]} pb={[24, 0, 0]} as="nav">
      <Flex
        py={[4, 8, 8]}
        borderBottom={"2px dashed"}
        borderColor={borderColor}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text
          fontSize={22}
          as={Link}
          href="/"
          fontWeight={"semibold"}
          _hover={{ color: hoverColor, bgColor: "initial" }}
        >
          Muhsin A
        </Text>

        <HStack spacing={2}>
          <IconButton
            onClick={toggleColorMode}
            fontSize={24}
            variant="ghost"
            aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
            icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          />
          <RocketLaunch />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

import { Button, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { BsMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
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

      {/* <Button aria-label="Toggle dark Mode" onClick={toggleColorMode} variant={"ghost"}>
        {colorMode === "light" ? <BsMoonFill /> : <BsSun />}
      </Button> */}
    </Flex>
  );
};

export default Navbar;

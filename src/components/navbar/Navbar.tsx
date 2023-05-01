import { Button, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      color={"secondary.500"}
      py={8}
      borderBottom={"2px solid"}
      borderColor={useColorModeValue("gray.100", "gray.700")}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Text fontSize={22} fontWeight={"black"} fontFamily={"poppins"}>
        Muhsin
      </Text>

      {/* <Button aria-label="Toggle dark Mode" onClick={toggleColorMode} variant={"ghost"}>
        {colorMode === "light" ? <BsMoonFill /> : <BsSun />}
      </Button> */}
    </Flex>
  );
};

export default Navbar;

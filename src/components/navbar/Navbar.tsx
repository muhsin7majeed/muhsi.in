import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex color={"text"} py={8} borderBottom={"2px solid"} borderColor={"gray.100"}>
      <Text fontSize={22} fontWeight={"black"} fontFamily={"poppins"}>
        muhsin
      </Text>
    </Flex>
  );
};

export default Navbar;

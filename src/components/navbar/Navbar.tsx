import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex color={"text"} px={[10, 20, 40]} py={8}>
      <Text fontSize={22} fontWeight={"black"} fontFamily={"poppins"}>logo</Text>
    </Flex>
  );
};

export default Navbar;

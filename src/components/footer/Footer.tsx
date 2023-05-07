import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      textAlign={"center"}
      py={10}
    >
      <Text fontSize={"sm"}>
        made with chakra ui, thanks to{" "}
        <Link target="_blank" href="https://storyset.com/amico" textDecor={"underline"}>
          Storyset/amico
        </Link>{" "}
        for illustrations
      </Text>

      <Link fontSize={"sm"} target="_blank" href="https://github.com/muhsin7majeed/muhsi.in" textDecor={"underline"}>
        fork this repo
      </Link>
    </Box>
  );
};

export default Footer;

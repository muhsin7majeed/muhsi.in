import { Box, IconButton, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { SiChakraui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ImPencil2 } from "react-icons/im";

const TOOLS_USED = [
  {
    name: "Chakra UI",
    icon: SiChakraui,
    link: "https://chakra-ui.com/",
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
    link: "https://nextjs.org/",
  },
  {
    name: "Storyset",
    icon: ImPencil2,
    link: "https://storyset.com/amico",
  },
];

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      textAlign={"center"}
      py={10}
    >
      <Text mb={3}>
        This page was made by using the following, feel free to{" "}
        <Link target="_blank" href="https://github.com/muhsin7majeed/muhsi.in" textDecor={"underline"}>
          fork this repo
        </Link>
      </Text>

      {TOOLS_USED.map((tool) => (
        <IconButton
          fontSize={24}
          variant="ghost"
          key={tool.name}
          as={Link}
          href={tool.link}
          target="_blank"
          aria-label={tool.name}
          icon={<tool.icon />}
        ></IconButton>
      ))}
    </Box>
  );
};

export default Footer;

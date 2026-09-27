import { Container, Flex, HStack, IconButton, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import RocketLaunch from "../rocket/RocketLaunch";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const shouldReduceMotion = useReducedMotion();
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
            transition="transform 0.2s ease, background-color 0.2s ease"
            _hover={{ transform: "translateY(-1px)" }}
            _active={{ transform: "scale(0.92)" }}
            icon={
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={colorMode}
                  initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.16 }}
                  style={{ display: "flex" }}
                >
                  {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                </motion.span>
              </AnimatePresence>
            }
          />
          <RocketLaunch />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

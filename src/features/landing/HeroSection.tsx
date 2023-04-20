import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import Navbar from "@/components/navbar/Navbar";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WELCOME_TEXT = [
  "hey there!",
  "Wie geht es dir ?",
  "¿Cómo estás?",
  "नमस्ते",
  "你好",
  "Привет",
  "ഹലോ..",
  "كيف حالك",
  "bonjour",
];

const HeroSection = () => {
  const [welcomeTextIndex, setWelcomeTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeTextIndex((welcomeTextIndex + 1) % WELCOME_TEXT.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [welcomeTextIndex]);

  return (
    <Box bgColor="primary" w="100vw" h="100vh" px={[2, 10, 20]} pb={16} className="hero__section">
      <Flex direction="column" maxW={"7xl"} height="100%">
        <Box>
          <Navbar />
        </Box>

        <Flex px="4" w="100%" height="100%" justifyContent="center" alignItems="center">
          <Box className="hero__text__container" boxShadow="lg">
            <Box className="half__border top" />
            <Box className="half__border left" />
            <Box className="half__border right" />
            <Box className="half__border bottom" />

            <Box whiteSpace="nowrap" fontSize="4vmin" color="accent.one">
              <AnimatePresence mode="wait">
                <motion.p
                  key={welcomeTextIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  {WELCOME_TEXT[welcomeTextIndex]}
                </motion.p>
              </AnimatePresence>
            </Box>

            <Heading whiteSpace="nowrap" fontSize="12vmin" fontWeight="900">
              i&apos;m muhsin
            </Heading>
            <Text fontSize="4vmin" fontWeight="100" textAlign="right">
              i build things in javascript
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeroSection;

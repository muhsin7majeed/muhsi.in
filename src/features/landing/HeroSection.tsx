import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiDownload, FiSend } from "react-icons/fi";

import HeroIcon from "@/components/svgs/HeroIcon";
import SocialIcons from "@/components/svgs/SocialIcons";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const resumeHoverBackground = useColorModeValue("primary.50", "whiteAlpha.100");
  const reveal = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    animate: {
      opacity: shouldReduceMotion || isInView ? 1 : 0,
      y: shouldReduceMotion || isInView ? 0 : 20,
    },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <Container maxW={"7xl"} mb={[8, 4, 0]} pb={[24, 0, 0]} as="section">
      <Flex
        alignItems="center"
        gap={4}
        direction={["column-reverse", "column-reverse", "row"]}
        minH={"100vh"}
        ref={ref}
      >
        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          w="100%"
        >
          <motion.div {...reveal(0.08)}>
            <Heading fontSize={"4xl"} mb={4} data-launch-react>
              <Text as="span" color="primary.500" me="3">
                Little bit of this,
              </Text>
              and little bit of that.
            </Heading>
          </motion.div>

          <motion.div {...reveal(0.15)}>
            <Text mb={4} fontSize={"2xl"} data-launch-react>
              Hey there! I'm{" "}
              <Text as="span" fontWeight="medium" color="primary.500">
                Muhsin
              </Text>
              , a{" "}
              <Text as="span" fontWeight="medium" color="primary.500">
                Frontend Engineer
              </Text>{" "}
              from Kerala, India. I'm specialized in{" "}
              <Text as="span" fontWeight="medium" color="primary.500">
                React & JavaScript
              </Text>
              .
            </Text>
          </motion.div>

          <motion.div {...reveal(0.22)}>
            <Flex alignItems="center" gap={4} data-launch-react>
              <Button
                colorScheme="primary"
                as={Link}
                href="mailto:me@muhsi.in"
                target="_blank"
                rightIcon={<Icon className="cta-icon" as={FiSend} transition="transform 0.2s ease" />}
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                  ".cta-icon": { transform: "translateX(3px)" },
                }}
                _active={{ transform: "translateY(0) scale(0.98)" }}
              >
                Get in touch
              </Button>
              <Button
                colorScheme="primary"
                variant="outline"
                as={Link}
                href="/resume.pdf"
                target="_blank"
                rightIcon={<Icon className="cta-icon" as={FiDownload} transition="transform 0.2s ease" />}
                transition="transform 0.2s ease, background-color 0.2s ease"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: resumeHoverBackground,
                  ".cta-icon": { transform: "translateY(2px)" },
                }}
                _active={{ transform: "translateY(0) scale(0.98)" }}
              >
                Résumé
              </Button>
            </Flex>
          </motion.div>

          <SocialIcons isInView={isInView} />
        </Flex>

        <Box w="100%" data-launch-react>
          <HeroIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default HeroSection;

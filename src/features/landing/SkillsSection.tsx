import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import SkillsSvg from "./SkillsSvg";

const SkillsSection = () => {
  return (
    <Box as="section" pos="relative" zIndex={1} bgColor="secondary" h="100vh" px={[2, 10, 20]}>
      <Flex direction="column" justifyContent="center" alignItems="center" maxW={"7xl"} height="100%" m="auto">
        <Heading mb={4}>see anything you like?</Heading>

        <SkillsSvg />
      </Flex>
    </Box>
  );
};

export default SkillsSection;

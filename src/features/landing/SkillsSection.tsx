import {
  Container,
  Flex,
  Heading,
  Box,
  Text,
  Card,
  Icon,
  Grid,
  GridItem,
  IconButton,
  Button,
  ModalOverlay,
} from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import SKILLS_LIST from "@/__DATA__/skills";
import SkillsIcon from "@/components/svgs/SkillsIcon";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { Skill } from "@/types/Skills";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const clearSelection = () => {
    setSelectedSkill(null);
  };

  return (
    <Container maxW={"7xl"} className="skills__section" py={24} pos="relative">
      <Flex alignItems="center" gap={8} direction={["column-reverse", "column-reverse", "row"]} h="90%">
        <Flex direction="column" alignItems={["center", "center", "start"]} justifyContent="center" w="100%" h="100%">
          <Heading fontSize={"4xl"}>What do I know?</Heading>

          <Text mt={4} mb={8} color="gray.500" textAlign={["center", "center", "start"]}>
            Hint: Click on a card with a <Icon as={FcInfo} verticalAlign="middle" /> icon to learn more about related
            skills.
          </Text>

          {/* {selectedSkill && <Box w="100vw" h="100vh" pos="fixed" top="0" left="0" bgColor="#00000053" />} */}

          <Grid gap={3} templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}>
            <AnimatePresence>
              {selectedSkill && (
                <Box
                  as={motion.div}
                  layoutId={selectedSkill.name}
                  pos="absolute"
                  w="100%"
                  h="100%"
                  top={0}
                  left={0}
                  zIndex={1}
                  backdropFilter="auto"
                  backdropBlur="16px"
                  boxShadow="xl"
                  bgColor="gray.100"
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mb={4}
                    p={4}
                    bgColor="white"
                    boxShadow="inner"
                  >
                    <Heading fontSize={"2xl"} color="blackAlpha.700">
                      What do I know about{" "}
                      <Text as="span" color={selectedSkill.color}>
                        {selectedSkill.name}
                      </Text>
                      ?
                    </Heading>

                    <IconButton
                      aria-label="hide more info"
                      icon={<IoClose />}
                      fontSize={16}
                      onClick={clearSelection}
                      variant="ghost"
                      colorScheme="primary"
                    />
                  </Flex>

                  <Grid gap={3} templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", `repeat(4, 1fr)`]} p={4}>
                    {selectedSkill.subSkills?.map((skill) => {
                      return (
                        <GridItem key={skill.name}>
                          <SkillCard skill={skill} />
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Box>
              )}
            </AnimatePresence>

            {SKILLS_LIST.map((skill) => (
              <GridItem key={skill.name}>
                <motion.div layoutId={skill.name}>
                  <SkillCard skill={skill} handleSkillSelection={setSelectedSkill} />
                </motion.div>
              </GridItem>
            ))}
          </Grid>
        </Flex>

        <Box w="100%">
          <SkillsIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default SkillsSection;

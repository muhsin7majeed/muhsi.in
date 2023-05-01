import { useState } from "react";
import { FcInfo } from "react-icons/fc";
import {
  Container,
  Flex,
  Heading,
  Box,
  Icon,
  Grid,
  GridItem,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
  ModalBody,
} from "@chakra-ui/react";

import SkillsIcon from "@/components/svgs/SkillsIcon";
import SkillCard from "@/components/SkillCard";
import { Skill } from "@/types/Skills";
import SKILLS_LIST from "@/__DATA__/skills";

interface SkillsGridPropTypes {
  list: Skill[] | undefined;
  handleSkillSelection?: (skill: Skill) => void;
}

const SkillsGrid = ({ list, handleSkillSelection }: SkillsGridPropTypes) => {
  return (
    <Grid gap={3} templateColumns="repeat(auto-fit, minmax(200px, 1fr))" width="100%">
      {list?.map((skill) => (
        <GridItem key={skill.name}>
          <SkillCard skill={skill} handleSkillSelection={handleSkillSelection} />
        </GridItem>
      ))}
    </Grid>
  );
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleClearSelection = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <Modal
        isOpen={Boolean(selectedSkill)}
        onClose={handleClearSelection}
        blockScrollOnMount={true}
        isCentered
        motionPreset="scale"
        size="xl"
      >
        <ModalOverlay />

        {selectedSkill && (
          <ModalContent>
            <ModalHeader>
              What do I know about{" "}
              <Text as="span" color={selectedSkill.color}>
                {selectedSkill.name}
              </Text>
              ?
            </ModalHeader>

            <ModalCloseButton />

            <ModalBody py={4}>
              <SkillsGrid list={selectedSkill.subSkills} />
            </ModalBody>
          </ModalContent>
        )}
      </Modal>

      <Container maxW={"7xl"} className="skills__section" py={24} pos="relative">
        <Flex alignItems="center" gap={8} direction={["column-reverse", "column-reverse", "row"]} h="90%">
          <Flex direction="column" alignItems={["center", "center", "start"]} justifyContent="center" w="100%" h="100%">
            <Heading fontSize={"4xl"}>What do I know?</Heading>

            <Text mt={4} mb={8} textAlign={["center", "center", "start"]}>
              Hint: Click on a card with a <Icon as={FcInfo} verticalAlign="middle" /> icon to learn more about related
              skills.
            </Text>

            <SkillsGrid list={SKILLS_LIST} handleSkillSelection={(skill) => setSelectedSkill(skill)} />
          </Flex>

          <Box w="100%">
            <SkillsIcon />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default SkillsSection;

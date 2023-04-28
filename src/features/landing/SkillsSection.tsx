import { Container, Flex, Heading, Box, Text, Card, Icon } from "@chakra-ui/react";

import SKILLS_LIST from "@/__DATA__/skills";
import SkillsIcon from "@/components/svgs/SkillsIcon";

const SkillsSection = () => {
  return (
    <Container maxW={"7xl"} className="skills__section" py={24}>
      <Flex alignItems="center" gap={8} direction={["column-reverse", "column-reverse", "row"]} h="90%">
        <Flex direction="column" alignItems="start" justifyContent="center" w="100%" h="100%">
          <Heading fontSize={"4xl"} mb={4}>
            What do I know?
          </Heading>

          <Flex gap={3} direction={["column", "row", "row"]}>
            {SKILLS_LIST.map((column, index) => (
              <Box key={index} width={"100%"}>
                {column.map((skill, index) => (
                  <Card key={index} p={2} mb={4} boxShadow="lg">
                    <Flex alignItems="center" gap={2}>
                      <Icon fontSize={45} as={skill.icon} p={1} color={skill.color} />

                      <Heading fontSize={22}>{skill.name}</Heading>
                    </Flex>

                    <Text px={2}>{skill.desc}</Text>
                  </Card>
                ))}
              </Box>
            ))}
          </Flex>
        </Flex>

        <Box w="50%">
          <SkillsIcon />
        </Box>
      </Flex>
    </Container>
  );
};

export default SkillsSection;

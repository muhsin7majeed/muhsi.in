import { Card, Flex, Heading, Icon } from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";

import { Skill } from "@/types/Skills";

interface SkillCardPropTypes {
  skill: Skill;
  handleSkillSelection?: (skill: Skill) => void;
}

const SkillCard = ({ skill, handleSkillSelection }: SkillCardPropTypes) => {
  const hasSubSkill = Boolean(skill.subSkills?.length);

  return (
    <Card
      as={Flex}
      onClick={() => {
        if (!hasSubSkill) return;

        handleSkillSelection?.(skill);
      }}
      p={3}
      boxShadow="lg"
      justifyContent="center"
      alignItems="center"
      pos="relative"
      cursor={hasSubSkill ? "pointer" : "initial"}
      transition="transform .05s linear"
      _hover={
        hasSubSkill
          ? {
              transform: `scale(1.2)`,
              zIndex: 1,
            }
          : {}
      }
    >
      {hasSubSkill && <Icon pos="absolute" top={2} right={2} fontSize={16} as={FcInfo} />}

      <Icon fontSize={45} as={skill.icon} p={1} color={skill.color} />

      <Heading fontSize={18} whiteSpace="nowrap" color="blackAlpha.700">
        {skill.name}
      </Heading>
    </Card>
  );
};

export default SkillCard;

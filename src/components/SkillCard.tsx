import { Card, Heading, Icon } from "@chakra-ui/react";
import { FcInfo } from "react-icons/fc";

import { Skill } from "@/types/Skills";

interface SkillCardPropTypes {
  skill: Skill;
  handleSkillSelection?: (skill: Skill) => void;
}

const SkillCard = ({ skill, handleSkillSelection }: SkillCardPropTypes) => {
  const hasSubSkill = Boolean(skill.subSkills?.length);
  const content = (
    <>
      {hasSubSkill && <Icon pos="absolute" top={2} right={2} fontSize={16} as={FcInfo} />}

      <Icon
        className="skill-icon"
        fontSize={45}
        as={skill.icon}
        p={1}
        color={skill.color}
        _dark={{ color: skill.darkColor ?? skill.color }}
        transition="transform 0.2s ease"
      />

      <Heading as="span" fontSize={18} whiteSpace="nowrap">
        {skill.name}
      </Heading>
    </>
  );
  const cardProps = {
    p: 3,
    boxShadow: "lg",
    border: "1px solid",
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    pos: "relative" as const,
    width: "100%",
  };

  if (!hasSubSkill) return <Card {...cardProps}>{content}</Card>;

  return (
    <Card
      {...cardProps}
      as="button"
      type="button"
      onClick={() => handleSkillSelection?.(skill)}
      aria-haspopup="dialog"
      cursor="pointer"
      transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      _hover={{
        transform: "translateY(-3px)",
        boxShadow: "xl",
        borderColor: "primary.300",
        ".skill-icon": { transform: "translateY(-1px) rotate(-4deg)" },
      }}
      _active={{ transform: "translateY(0) scale(0.98)" }}
      _focusVisible={{
        boxShadow: "outline",
        borderColor: "primary.400",
        ".skill-icon": { transform: "translateY(-1px) rotate(-4deg)" },
      }}
    >
      {content}
    </Card>
  );
};

export default SkillCard;

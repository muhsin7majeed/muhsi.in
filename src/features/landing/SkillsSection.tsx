import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const SKILLS_LIST = [
  {
    id: 1,
    icon: "react.svg",
    name: "ReactJs",
    description: "Random Text",
  },
  {
    id: 2,
    icon: "angular.svg",
    name: "Angular 2+",
    description: "Random Text",
  },
  {
    id: 3,
    icon: "html5.svg",
    name: "HTML5",
    description: "Random Text",
  },
  {
    id: 4,
    icon: "javascript.svg",
    name: "JavaScript",
    description: "Random Text",
  },
  {
    id: 5,
    icon: "css3.svg",
    name: "CSS3",
    description: "Random Text",
  },
  {
    id: 6,
    icon: "typescript.svg",
    name: "TypeScript",
    description: "Random Text",
  },
  {
    id: 7,
    icon: "nodejs.svg",
    name: "NodeJs",
    description: "Random Text",
  },
];

const SkillsSection = () => {
  return (
    <Box id="skills_section" minHeight={"90vh"} pos={"relative"}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems={"center"}>
        <Box pos={"relative"}>
          <Image
            width={"100%"}
            rounded={"md"}
            zIndex={1}
            alt={"feature image"}
            src={"/assets/illustrations/skills.svg"}
            objectFit={"cover"}
          />

          <Box>
            {SKILLS_LIST.map((skill, index) => {
              const angle = (index / SKILLS_LIST.length) * 360;
              const radius = 100;

              // calculate the x and y position of the skill
              const x = radius * Math.cos((angle * Math.PI) / 180) + Math.random() * 100 - 50;
              const y = radius * Math.sin((angle * Math.PI) / 180) + Math.random() * 100 - 50;

              return (
                <Image
                  position="absolute"
                  top={`calc(50% + ${y}px)`}
                  left={`calc(50% + ${x}px)`}
                  width={50}
                  height={50}
                  key={skill.id}
                  alt={"skill"}
                  src={`/assets/icons/${skill.icon}`}
                  objectFit={"contain"}
                />
              );
            })}
          </Box>
        </Box>

        <Stack spacing={4}>
          <Heading>A digital Product design agency</Heading>

          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;

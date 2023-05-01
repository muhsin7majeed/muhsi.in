import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import AboutMeIcon from "@/components/svgs/AboutMeIcon";

const AboutMeSection = () => {
  return (
    <Container maxW={"7xl"} className="about_me__section">
      <Flex alignItems="center" gap={8} direction={["column-reverse", "column-reverse", "row"]} h="90%">
        <Box w="70%">
          <AboutMeIcon />
        </Box>

        <Flex direction="column" alignItems="start" justifyContent="center" w="100%" h="100%">
          <Heading fontSize={"4xl"} mb={4}>
            Who am I?
          </Heading>

          <Box mb={4} fontSize={"2xl"} >
            <Text>
              Enim nulla officia dolore esse tempor occaecat aute commodo sunt. Officia dolore in magna nulla. Ex enim
              ad voluptate ad Lorem velit consectetur eu id occaecat. Voluptate officia adipisicing ipsum commodo
              laboris cupidatat tempor nisi aliqua aliqua exercitation fugiat est. Eiusmod laborum deserunt do qui. Esse
              qui velit pariatur ut aute magna nisi.
            </Text>

            <Text>
              Labore excepteur labore dolor veniam adipisicing tempor in proident nostrud culpa. Eiusmod quis magna
              reprehenderit laborum ad nostrud tempor ipsum non. Do mollit magna excepteur sunt anim esse non proident
              laborum reprehenderit laborum elit Lorem. Reprehenderit sunt anim Lorem eiusmod pariatur incididunt velit
              laborum laboris officia do dolor reprehenderit. Officia est est enim Lorem Lorem.
            </Text>

            <Text>
              Consectetur fugiat excepteur sint id incididunt tempor. Pariatur esse reprehenderit ullamco mollit ad.
              Anim elit ex non culpa nostrud mollit enim dolor. Qui ad ad exercitation anim in nisi irure ex commodo.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AboutMeSection;

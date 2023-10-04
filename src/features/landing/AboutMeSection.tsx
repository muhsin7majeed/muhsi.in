import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Container, Flex, Heading, Text, chakra } from "@chakra-ui/react";

import AboutMeIcon from "@/components/svgs/AboutMeIcon";
import MoreAboutMe from "./MoreAboutMe";

const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container maxW={"7xl"} pb={24} as="section">
      <Flex alignItems="center" gap={8} direction={["column-reverse", "column-reverse", "row"]}>
        <Box w="70%">
          <AboutMeIcon />
        </Box>

        <Box w="100%" ref={ref}>
          <Heading fontSize={"4xl"} mb={4}>
            Who am I?
          </Heading>

          <Box mb={4} fontSize={"2xl"}>
            <Text
              mb={4}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s ease 0.5s",
              }}
            >
              Hey there! My name is Muhsin, and I am a passionate web developer with a love for building things from
              scratch. My journey into the world of web development began in my school days when my brother gifted me a
              computer and introduced me to the wonders of programming. It wasn&apos;t long before I was tinkering with
              HTML and CSS and creating my first website with a bold heading that read,{" "}
              <chakra.span color="primary.500">Welcome to my website</chakra.span>. The process of bringing something to
              life from nothing was exhilarating, and I knew then that this was the career for me.
            </Text>

            <Text
              mb={4}
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s ease 0.8s",
              }}
            >
              After honing my skills, I decided to take the leap and applied for a job at a small service-based company
              called Techwarelab, Kochi, India. There, I gained valuable experience and contributed to a variety of
              projects that helped me grow as a developer.
            </Text>

            <Text
              style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s ease 1s",
              }}
            >
              Today, I work for Springworks, where I have the opportunity to work with a talented team of developers and
              create innovative solutions for a range of clients. My focus is on developing high-quality applications
              that are not only visually appealing but also user-friendly and functional.
            </Text>
          </Box>
        </Box>
      </Flex>

      <MoreAboutMe />
    </Container>
  );
};

export default AboutMeSection;

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";

import ProjectCard from "@/components/ProjectCard";
import PROJECTS_DATA from "@/__DATA__/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container maxW={"7xl"} mb={24} as="section">
      <Heading
        fontSize={"4xl"}
        mb={4}
        style={{
          transform: isInView ? "none" : "translateY(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease 0.2s",
        }}
      >
        Projects
      </Heading>

      <Box
        mt={12}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease 0.4s",
        }}
      >
        <SimpleGrid columns={[1, 2, 3, 4]} gap={4}>
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ProjectsSection;

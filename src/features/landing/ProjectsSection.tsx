import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Container, Heading, Grid, GridItem } from "@chakra-ui/react";

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
        <Grid
          templateColumns={[
            "1fr",
            "1fr",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={8}
        >
          {PROJECTS_DATA.map((project, index) => (
            <GridItem key={project.id}>
              <ProjectCard project={project} index={index} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProjectsSection;

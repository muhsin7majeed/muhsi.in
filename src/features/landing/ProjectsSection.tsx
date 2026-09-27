import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import ProjectCard from "@/components/ProjectCard";
import PROJECTS_DATA from "@/__DATA__/projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container ref={ref} maxW={"7xl"} mb={24} as="section">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{
          opacity: shouldReduceMotion || isInView ? 1 : 0,
          y: shouldReduceMotion || isInView ? 0 : 20,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Heading fontSize={"4xl"} mb={4} data-launch-react>
          Projects
        </Heading>
      </motion.div>

      <Box mt={12}>
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

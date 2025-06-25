import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const SkillsSection = dynamic(() => import("./SkillsSection"));
const Experiences = dynamic(() => import("./Experiences/Experiences"));
const ProjectsSection = dynamic(() => import("./ProjectsSection"));
// const TestimonialsSection = dynamic(() => import("./TestimonialsSection"));

export const LandingContainer = () => {
  return (
    <>
      <Box paddingBottom={24} as="main">
        <HeroSection />
        <ProjectsSection />
        <Experiences />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
      </Box>
    </>
  );
};

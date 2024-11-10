import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const SkillsSection = dynamic(() => import("./SkillsSection"));
const Experiences = dynamic(() => import("./Experiences/Experiences"));
// const TestimonialsSection = dynamic(() => import("./TestimonialsSection"));

export const LandingContainer = () => {
  return (
    <>
      <Box paddingBottom={24} as="main">
        <HeroSection />
        <Experiences />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
      </Box>
    </>
  );
};

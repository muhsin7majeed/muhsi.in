import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";
import TestimonialsSection from "./TestimonialsSection";

export const LandingContainer = () => {
  return (
    <>
      <Box paddingBottom={24}>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        {/* <TestimonialsSection /> */}
      </Box>
    </>
  );
};

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
const AboutMeSection = dynamic(() => import("./AboutMeSection"));
const SkillsSection = dynamic(() => import("./SkillsSection"));
// const TestimonialsSection = dynamic(() => import("./TestimonialsSection"));

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

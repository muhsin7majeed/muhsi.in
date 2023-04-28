import { Box, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";

export const LandingContainer = () => {
  return (
    <>
      <Box paddingBottom={24}>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
      </Box>
    </>
  );
};

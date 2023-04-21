import { Box, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SkillsSection from "./SkillsSection";
import HeroSection from "./HeroSection";

export const LandingContainer = () => {
  return (
    <>
      <Box color="text">
        <HeroSection />
        <SkillsSection />
      </Box>
    </>
  );
};

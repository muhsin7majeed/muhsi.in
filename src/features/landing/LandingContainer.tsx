import { Box, Spinner } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <Box textAlign={"center"}>
      <Spinner />
    </Box>
  ),
});

export const LandingContainer = () => {
  return (
    <Box pos="relative">
      <HeroSection />
    </Box>
  );
};

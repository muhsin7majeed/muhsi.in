import Navbar from "@/components/navbar/Navbar";
import { COLORS } from "@/pages/_app";
import { Box } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import * as THREE from "three";

const HeroSection = () => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: COLORS.primary,
      }}
    >
       <Navbar />
      <Spline scene="https://prod.spline.design/Bqwj4-v7Nk8lW0ix/scene.splinecode" />
    </Box>
  );
};

export default HeroSection;

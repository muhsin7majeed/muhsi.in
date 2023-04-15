import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

const ThreeDHeroSection = () => {
  return (
    <>
      here lies 3d
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Spline scene="https://prod.spline.design/3c6xGop7mfOrKuf7/scene.splinecode" />
      {/* </Suspense> */}
    </>
  );
};

export default ThreeDHeroSection;

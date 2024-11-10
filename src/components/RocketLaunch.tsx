import React, { useState, useEffect } from "react";
import { Text, Box, IconButton } from "@chakra-ui/react";
import { MdRocket, MdRocketLaunch } from "react-icons/md";

const DEFAULT_COUNTDOWN = 3;
const ANIMATION_DURATION = 4;

const RocketLaunch = () => {
  const [launchStatus, setLaunchStatus] = useState<"idle" | "countdown" | "launching" | "success">("idle");
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);

  useEffect(() => {
    if (launchStatus === "countdown" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (countdown === 0) {
      setLaunchStatus("launching");
      setCountdown(DEFAULT_COUNTDOWN);
    }

    if (launchStatus === "launching") {
      setTimeout(() => {
        setLaunchStatus("idle");

        document.body.style.animation = "";
        document.body.style.animationIterationCount = "";
        document.body.classList.remove("launch-process");
      }, ANIMATION_DURATION * 1000);
    }
  }, [countdown, launchStatus]);

  const handleLaunch = () => {
    document.body.style.animation = `element-shake .5s linear`;
    document.body.style.animationIterationCount = `infinite`;
    document.body.classList.add("launch-process");

    setLaunchStatus("countdown");
  };

  return (
    <Box textAlign="center" mt={5}>
      {launchStatus === "idle" && (
        <IconButton
          onClick={handleLaunch}
          fontSize={30}
          color="primary.500"
          variant="ghost"
          aria-label="lauch rocket"
          icon={<MdRocketLaunch />}
        />
      )}

      {launchStatus === "countdown" && (
        <Box
          backgroundColor={"red.500"}
          style={{
            animation: "pulse .5s linear",
            animationIterationCount: "infinite",
          }}
          zIndex={99}
          top={"50%"}
          left={"50%"}
          transform="translate(-50%, -50%)"
          position="fixed"
          fontSize="36"
          padding={30}
          fontWeight="bold"
          rounded={10}
          color="white"
        >
          <Text display="block">This is not a drill! Stand Clear!!</Text>
          <Text>T - {countdown}</Text>
        </Box>
      )}

      {launchStatus === "launching" && (
        <>
          <Box
            style={{
              animation: "element-shake .5s",
              animationIterationCount: "infinite",
            }}
            zIndex={100}
            width={"100%"}
            height={"100%"}
            top={0}
            left={0}
            position="fixed"
          ></Box>

          <Box
            zIndex={100}
            position="fixed"
            left={"50%"}
            bottom={"-10%"}
            transform={"translateX(-50%)"}
            color="primary.500"
            style={{
              animation: `rocket-launch ${ANIMATION_DURATION}s linear`,
              animationIterationCount: "infinite",
              animationFillMode: "forwards",
            }}
          >
            <MdRocket size={400} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default RocketLaunch;

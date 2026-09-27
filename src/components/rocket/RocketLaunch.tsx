import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { IconButton } from "@chakra-ui/react";
import { MdRocketLaunch } from "react-icons/md";

/** Only the button ships in the main bundle; the whole sequence loads on intent. */
const LaunchSequence = dynamic(() => import("./LaunchSequence"), { ssr: false });
const preload = () => {
  void import("./LaunchSequence");
};

const RocketLaunch = () => {
  const [active, setActive] = useState(false);
  const handleDone = useCallback(() => setActive(false), []);

  return (
    <>
      <IconButton
        onClick={() => setActive(true)}
        onMouseEnter={preload}
        onFocus={preload}
        onTouchStart={preload}
        isDisabled={active}
        fontSize={30}
        color="primary.500"
        variant="ghost"
        aria-label={active ? "Rocket launch in progress. Press Escape to abort." : "Launch rocket"}
        transition="transform 0.2s ease, filter 0.2s ease"
        _hover={{ transform: "translateY(-2px) rotate(-10deg)", filter: "drop-shadow(0 0 5px currentColor)" }}
        _active={{ transform: "translateY(0) scale(0.9)" }}
        sx={{ "@media (prefers-reduced-motion: reduce)": { transition: "none" } }}
        icon={<MdRocketLaunch />}
      />
      {active && <LaunchSequence onDone={handleDone} />}
    </>
  );
};

export default RocketLaunch;

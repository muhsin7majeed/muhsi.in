import React from "react";
import { Box, Link } from "@chakra-ui/react";
import styles from "./style.module.scss";

const Arrow = () => {
  return <Box className={styles.arrow} />;
};

const Mouse = () => {
  return (
    <Box className={styles.mouse}>
      <Box className={styles["mouse-wheel"]} backgroundColor={"tomato"} />
    </Box>
  );
};

const ScrollDownIndicator = ({ scrollToId }: { scrollToId: string }) => {
  return (
    <Link href={scrollToId}>
      <Box className={styles["scroll-down-indicator"]}>
        <Mouse />

        <Box>
          <Arrow />
          <Arrow />
          <Arrow />
        </Box>
      </Box>
    </Link>
  );
};

export default ScrollDownIndicator;

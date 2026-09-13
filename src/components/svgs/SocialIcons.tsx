import { HStack, Icon, Link } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";

import SOCIAL_LINKS from "@/__DATA__/socials";

interface SocialIconsPropTypes {
  isInView: boolean;
}

const SocialIcons = ({ isInView }: SocialIconsPropTypes) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <HStack my={4} gap={3}>
        {SOCIAL_LINKS.map((item, index) => (
          <motion.div
            key={item.name}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{
              opacity: shouldReduceMotion || isInView ? 1 : 0,
              y: shouldReduceMotion || isInView ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: 0.26 + index * 0.05, ease: "easeOut" }}
          >
            <Link
              href={item.link}
              display="flex"
              isExternal
              aria-label={item.name}
              borderRadius="md"
              transition="transform 0.2s ease"
              _hover={{
                transform: "translateY(-2px)",
                ".social-icon": { transform: `scale(1.12) rotate(${index % 2 === 0 ? -3 : 3}deg)` },
              }}
              _active={{ transform: "translateY(0) scale(0.96)" }}
              _focusVisible={{
                outline: "2px solid",
                outlineColor: "primary.500",
                outlineOffset: "3px",
                ".social-icon": { transform: `scale(1.12) rotate(${index % 2 === 0 ? -3 : 3}deg)` },
              }}
            >
              <Icon
                className="social-icon"
                fontSize="3xl"
                as={item.icon}
                color={item.color}
                _dark={{ color: item.darkColor ?? item.color }}
                transition="transform 0.2s ease"
              />
            </Link>
          </motion.div>
        ))}
      </HStack>
    </>
  );
};

export default SocialIcons;

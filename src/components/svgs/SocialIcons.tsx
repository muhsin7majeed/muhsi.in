import { HStack, Icon, Link } from "@chakra-ui/react";

import SOCIAL_LINKS from "@/__DATA__/socials";

interface SocialIconsPropTypes {
  isInView: boolean;
}

const SocialIcons = ({ isInView }: SocialIconsPropTypes) => {
  return (
    <>
      <HStack my={4} gap={3}>
        {SOCIAL_LINKS.map((item, index) => (
          <Link
            key={item.name}
            href={item.link}
            display="inline-block"
            isExternal
            style={{
              transform: isInView ? "none" : "translateY(300px)",
              opacity: isInView ? 1 : 0,
              transition: `transform 1s ease ${index / 10}s, opacity 1s ease ${index / 10}s`,
            }}
          >
            <Icon
              fontSize="3xl"
              as={item.icon}
              color={item.color}
              transition="transform .2s ease"
              _hover={{
                transform: "scale(1.5)",
              }}
            />
          </Link>
        ))}
      </HStack>
    </>
  );
};

export default SocialIcons;

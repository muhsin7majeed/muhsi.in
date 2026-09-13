import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Icon,
  Link,
  Badge,
  IconButton,
  Tooltip,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import { Project } from "@/types/Project";

interface ProjectCardPropTypes {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardPropTypes) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const headingColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const descriptionColor = useColorModeValue("gray.600", "gray.300");

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{
        opacity: shouldReduceMotion || isInView ? 1 : 0,
        y: shouldReduceMotion || isInView ? 0 : 20,
      }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: "easeOut" }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
      style={{ height: "100%" }}
    >
      <Card
        role="group"
        height="100%"
        overflow="hidden"
        boxShadow="lg"
        borderRadius="xl"
        transition="box-shadow 0.2s ease"
        _hover={{ boxShadow: "xl" }}
        _focusWithin={{ boxShadow: "xl" }}
      >
        {/* Project Image */}
        <Box position="relative" overflow="hidden">
          <Image
            src={project.image}
            alt={project.title}
            width="100%"
            height="200px"
            objectFit="cover"
            transition="transform 0.3s ease"
            _groupHover={{ transform: "scale(1.04)" }}
            _groupFocusWithin={{ transform: "scale(1.04)" }}
          />

          {/* Overlay with action buttons */}
          <Box
            position="absolute"
            inset={0}
            bg="blackAlpha.600"
            opacity={0}
            transition="opacity 0.2s ease"
            _groupHover={{ opacity: 1 }}
            _groupFocusWithin={{ opacity: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
            sx={{
              "@media (hover: none)": {
                opacity: 1,
                alignItems: "flex-end",
                pb: 4,
                background: "linear-gradient(to top, rgba(0, 0, 0, 0.72), transparent 65%)",
              },
            }}
          >
            <Tooltip label="View on GitHub" placement="top">
              <IconButton
                as={Link}
                href={project.githubUrl}
                isExternal
                aria-label={`View ${project.title} on GitHub`}
                icon={<Icon as={FiGithub} />}
                colorScheme="gray"
                variant="solid"
                size="lg"
                transition="transform 0.15s ease"
                _hover={{ transform: "scale(1.08)" }}
                _active={{ transform: "scale(0.96)" }}
              />
            </Tooltip>

            <Tooltip label="View Live Website" placement="top">
              <IconButton
                as={Link}
                href={project.websiteUrl}
                isExternal
                aria-label={`Visit ${project.title}`}
                icon={<Icon as={FiExternalLink} />}
                colorScheme="primary"
                variant="solid"
                size="lg"
                transition="transform 0.15s ease"
                _hover={{ transform: "scale(1.08)" }}
                _active={{ transform: "scale(0.96)" }}
              />
            </Tooltip>
          </Box>
        </Box>

        {/* Project Content */}
        <Box p={6}>
          <Heading size="md" mb={3} color={headingColor}>
            {project.title}
          </Heading>

          <Text color={descriptionColor} mb={4} lineHeight="tall">
            {project.description}
          </Text>

          {/* Tags */}
          <Box>
            <Flex flexWrap="wrap" gap={2}>
              {project.tags.map((tag) => (
                <Badge
                  key={tag.name}
                  colorScheme="gray"
                  variant="subtle"
                  px={2}
                  py={1}
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <Icon as={tag.icon} color={tag.color} fontSize="sm" />
                  {tag.name}
                </Badge>
              ))}
            </Flex>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;

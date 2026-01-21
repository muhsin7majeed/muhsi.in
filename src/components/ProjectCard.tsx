import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Icon,
  Link,
  HStack,
  Badge,
  IconButton,
  Tooltip,
  Flex,
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

  return (
    <Card
      ref={ref}
      overflow="hidden"
      boxShadow="lg"
      borderRadius="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "xl",
      }}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: `all 1s ease ${index / 10}s`,
      }}
      // maxW="300px"
      // width="100%"
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
          _hover={{
            transform: "scale(1.05)",
          }}
        />

        {/* Overlay with action buttons */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          opacity={0}
          transition="opacity 0.3s ease"
          _hover={{ opacity: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Tooltip label="View on GitHub" placement="top">
            <IconButton
              as={Link}
              href={project.githubUrl}
              isExternal
              aria-label="GitHub"
              icon={<Icon as={FiGithub} />}
              colorScheme="gray"
              variant="solid"
              size="lg"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Tooltip>

          <Tooltip label="View Live Website" placement="top">
            <IconButton
              as={Link}
              href={project.websiteUrl}
              isExternal
              aria-label="Live Website"
              icon={<Icon as={FiExternalLink} />}
              colorScheme="primary"
              variant="solid"
              size="lg"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Tooltip>
        </Box>
      </Box>

      {/* Project Content */}
      <Box p={6}>
        <Heading size="md" mb={3} color="gray.800">
          {project.title}
        </Heading>

        <Text color="gray.600" mb={4} lineHeight="tall">
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
  );
};

export default ProjectCard;

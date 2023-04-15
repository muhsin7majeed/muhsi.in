import React, { ReactElement, ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "About Me", icon: FiTrendingUp },
  { name: "Blog", icon: FiCompass },
  { name: "Projects", icon: FiStar },
];

export default function SidebarWithHeader({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"7xl"}>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Navbar onOpen={onOpen} />

      <Box p="4">{children}</Box>
    </Container>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={"full"}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>

        <CloseButton onClick={onClose} />
      </Flex>

      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        role="group"
        cursor="pointer"
        borderLeft={"8px"}
        borderColor={"transparent"}
        transition={".2s padding ease"}
        _hover={{
          borderLeft: "8px solid",
          borderColor: "pink.400",
          paddingLeft: "8",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" _groupHover={{}} as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

interface NavbarProps extends FlexProps {
  onOpen: () => void;
}
const Navbar = ({ onOpen, ...rest }: NavbarProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex px={4} height="20" alignItems="center" justifyContent={"space-between"} {...rest}>
      <IconButton onClick={onOpen} variant="ghost" aria-label="open menu" icon={<FiMenu />} />

      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>

      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="toggle dark mode"
        icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
      />
    </Flex>
  );
};

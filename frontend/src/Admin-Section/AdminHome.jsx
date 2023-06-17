import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  HStack,
  Avatar,
  VStack,
  MenuList,
  Button,
  Image,
  MenuItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import Login from "./Login";
import ContactsData from "./ContactsData";
import GeneralFormData from "./GenralFormData";
import { useColorModeValue } from "@chakra-ui/react";

function AdminHome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [renderContactData, setRenderContactData] = useState(false);
  const [renderFormData, setRenderFormData] = useState(true);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const handleContactDataClick = () => {
    setRenderContactData(true);
    setRenderFormData(false);
  };

  const handleFormDataClick = () => {
    setRenderContactData(false);
    setRenderFormData(true);
  };

  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const MobileNav = ({ onOpen, ...rest }) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("gray.800", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent="space-between"
        {...rest}
      >
        <IconButton
          variant="outline"
          color={"white"}
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Flex align="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "flex", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  color={"white"}
                  ml="2"
                >
                  <Text fontSize="sm">Kaizen-Tech</Text>
                  <Text fontSize="xs" color="white">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "block", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>
                <Button colorScheme="blue" onClick={handleLogout}>
                  Logout
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    );
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {isLoggedIn && (
        <Box
          display={{ base: "none", md: "block" }}
          bg={("white", "gray.900")}
          borderRight="1px"
          borderRightColor={("gray.200", "gray.700")}
          w={{ base: "0", md: 60 }}
          pos="fixed"
          h="full"
        >
          <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Image
              src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
              alt="Logo"
              w={{ base: "40%", md: "100%" }}
            />
          </Flex>
          <NavItem onClick={handleContactDataClick}>Contact Data</NavItem>
          <NavItem onClick={handleFormDataClick}>Form Data</NavItem>
        </Box>
      )}
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
          <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "sm", md: 60 }}
            h="full"
          >
            <Flex
              h="20"
              alignItems="center"
              mx="8"
              justifyContent="space-between"
            >
              <Image
                src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
                alt="Logo"
                w={{ base: "40%", md: "15%" }}
              />
              <CloseButton
                display={{ base: "flex", md: "none" }}
                onClick={onClose}
              />
            </Flex>
            <NavItem onClick={handleContactDataClick}>Contact Data</NavItem>
            <NavItem onClick={handleFormDataClick}>Form Data</NavItem>
          </Box>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      {isLoggedIn ? (
      <Box ml={{ base: 0, md: 60 }} p="4">
        
          <Box minH="100vh">
            <Flex
              align="center"
              justify="space-between"
              bg="gray.700"
              color="white"
              p={4}
              display={{ base: "none", md: "block" }}
            >
              <Flex align="center">
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">Kaizen-Tech</Text>
                        <Text fontSize="xs" color="gray.300">
                          Admin
                        </Text>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={("white", "gray.900")}
                    borderColor={("gray.200", "gray.700")}
                  >
                    <MenuItem>
                      <Button colorScheme="blue" onClick={handleLogout}>
                        Logout
                      </Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
            <SimpleGrid
              margin="auto"
              p="1"
              w={{ base: "100%", md: "100%" }}
            >
              {renderContactData && <ContactsData />}
              {renderFormData && <GeneralFormData />}
            </SimpleGrid>
          </Box>
      </Box>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </Box>
  );
}

export default AdminHome;

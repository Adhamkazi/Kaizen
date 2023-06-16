import { Box, Button, Flex, Avatar, IconButton, useDisclosure, VStack, SimpleGrid, Text, HStack, MenuButton, Menu, MenuList, useColorModeValue, MenuItem, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Login from './Login';
import ContactsData from './ContactsData';
import GenralFormData from './GenralFormData';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiChevronDown,
} from 'react-icons/fi';
function Navbar({ handleLogout }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" justify="space-between" bg="gray.700" color="white" p={4}>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open sidebar"
        display={{ base: 'block', md: 'none' }}
        onClick={onOpen}
      />
      <Flex  justifyContent={"center"}  >
        <Image src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png" alt="Logo" w={{base:"40%",md:"20%"}} />
      </Flex>
      <Flex align="center">
        {/* <Avatar name="John Doe" src="path-to-your-avatar.png" size="sm" mr={2} /> */}
        <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
           
              <MenuItem><Button colorScheme="blue" onClick={handleLogout}>
          Logout
        </Button></MenuItem>
            </MenuList>
            </Menu>
        
      </Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

function Sidebar({ isOpen, onClose, handleContactDataClick, handleFormDataClick }) {
  return (
    <Box
      bg="gray.800"
      color="white"
      w="200px"
      pos="fixed"
      top="0"
      left="0"
      h="100vh"
      p={4}
      transform={{ base: isOpen ? 'translateX(0)' : 'translateX(-100%)', md: 'translateX(0)' }}
      transition="transform 0.3s"
    >
      <VStack spacing={4} align="stretch">
        <Button colorScheme="blue" variant="outline" onClick={handleContactDataClick}>
          Contact Data
        </Button>
        <Button colorScheme="blue" variant="outline" onClick={handleFormDataClick}>
          Form Data
        </Button>
      </VStack>
    </Box>
  );
}

const AdminHome = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [renderContactData, setRenderContactData] = useState(false);
  const [renderFormData, setRenderFormData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/admin');
  };

  const handleContactDataClick = () => {
    setRenderContactData(true);
    setRenderFormData(false);
  };

  const handleFormDataClick = () => {
    setRenderContactData(false);
    setRenderFormData(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Box minH="100vh">
          <Navbar handleLogout={handleLogout} />
          <Sidebar handleContactDataClick={handleContactDataClick} handleFormDataClick={handleFormDataClick} />
          <SimpleGrid margin="auto" ml={{ base: 0, md: 60 }} p="4" w={'80%'}>
            {renderContactData && <ContactsData />}
            {renderFormData && <GenralFormData />}
          </SimpleGrid>
        </Box>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default AdminHome;

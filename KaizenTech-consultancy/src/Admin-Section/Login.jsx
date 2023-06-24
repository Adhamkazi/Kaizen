import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
  const Login =({setIsLoggedIn})=> {
    const toast = useToast()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate =useNavigate()

const handleLogin=()=>{
    if(email==="kaizen@mail.com"&&password==="123"){
        const token = '#14FSC3#';
setIsLoggedIn(true)
  
    localStorage.setItem('token', token);
    toast({
      description: "Logged in SuccesFull.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
        navigate("/admin")
    }else {
      toast({
        description: "Wrong Credentials.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
}


    return (
      <Flex
        minH={'100vh'}
        mt={{sm:"50px",md:"0px"}}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>administrator Login</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleLogin}>
                  Login in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }


  export default Login
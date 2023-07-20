import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import 'typeface-nunito';
  
  export default function Hero() {
    return (
        <div id='home' > 
      <Flex
      pt="150px"
        w={'100%'}
        h={'100vh'}
        backgroundImage={
          'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontFamily={"Nunito,sans-serif"}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             Discover Our Online and Offline Classes for Python, Power BI, Excel, and Full Stack Development 
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
             
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      </div>
    );
  }
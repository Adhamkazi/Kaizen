import { Box, Flex, Heading, SimpleGrid, Spacer, Text,  WrapItem } from "@chakra-ui/react";
import React, {  useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";


const GenralFormData = () => {

  const [users, setusers] = useState([]);
  console.log(users);

  const getData = async () => {
    try {
      const res = await fetch("https://rose-tough-greyhound.cyclic.app/genral");
      const data = await res.json();
      setusers(data);
    } catch (error) {
      console.log(error);
    }
  };
  getData();

  const handleDelete = (index) => {
    // Logic to delete a row based on the index
  };
  return (
    <div>
       <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Data
      </Heading>
      <SimpleGrid  columns={{base:1,md:3}} spacing={4}>
        {users.map((item, index) => (
          <WrapItem key={index}  >
            <Flex
            direction={"column"} rowGap={"10px"}
              borderWidth="1px"
              borderRadius="lg"
              p={10}
              textAlign={"left"}
            >
              <Text as={"h1"} fontWeight={'bold'}  fontFamily= "Roboto, sans-serif">  Date   : <Text as='span' fontWeight={500} color={"Highlight"} >  {item.date}</Text></Text>
              <Text as={"h1"} fontWeight={'bold'} fontFamily= "Roboto, sans-serif">   First Name    : <Text as='span' fontWeight={500} color={"Highlight"} >  {item.firstName}</Text></Text>
              <Text as={"h1"} fontWeight={'bold'}>Last Name   : <Text as='span' fontWeight={500} color={"Highlight"}>  {item.lastName}</Text> </Text>
              <Text as={"h1"} fontWeight={'bold'}>Email   : <Text as='span' fontWeight={500} color={"Highlight"}>{item.email} </Text></Text>
             <Text as={"h1"} fontWeight={'bold'}>Contact Number   :   <Text as='span' fontWeight={500} color={"Highlight"}>{item.contactNumber} </Text> </Text>
             <Text as={"h1"} fontWeight={'bold'}>Country Code    : <Text as='span' fontWeight={500} color={"Highlight"}> {item.countryCode}</Text></Text>
             <Text as={"h1"} fontWeight={'bold'}>Company Name   :   <Text as='span' fontWeight={500}color={"Highlight"} >{item.companyName} </Text> </Text>
              <Text as={"h1"} fontWeight={"bold"}>Message    : <Text as='span' fontWeight={500} color={"Highlight"}> {item.message}</Text></Text>
              <Text as={"h1"} fontWeight={'bold'}>Service     : <Text as='span' fontWeight={500} color={"Highlight"} > {item.service} </Text></Text>
              <Flex alignItems="center"> 
                <Spacer />
                <IconButton
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  onClick={() => handleDelete(index)}
                  size="sm"
                  variant="ghost"
                />
              </Flex>
            </Flex>
          </WrapItem>
        ))}
      </SimpleGrid>
    </Box>
    </div>
  );
};

export default GenralFormData;

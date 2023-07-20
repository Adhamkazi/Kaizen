import React from 'react';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import './Announcement.css';
export default function AnnouncementBar() {
  return (
    <Box className="bar"
    bg={{ base: useColorModeValue("gray.100", "gray.900"), md: "gray.100" }}
    padding={{ base: "5px", md: "5px" }}
    position={{ base: "fixed", md: "fixed" }}
   
    zIndex={999}
     w={"100%"}>    
      <Button
        w="100%"
        h={"1%"}
        overflow="hidden"
        whiteSpace="nowrap"
        gap={"20px"}
        display="flex"
        color="red"
        bg="#333"
        borderColor="none"
        lineHeight="1"
        fontSize="15px"
        textTransform="uppercase"
        fontFamily={"Plus Jakarta Sans"}
        border="none"
        backgroundColor="transparent"
        _hover={{
          backgroundColor: 'rgba(51, 51, 51, 0.025)',
          '> span': {
            animationPlayState: 'paused',
          },
        }}
      >
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
        <span>Limited Seats</span>
      </Button>
    </Box>
  );
}

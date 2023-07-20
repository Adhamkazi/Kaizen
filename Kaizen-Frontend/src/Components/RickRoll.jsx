import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const RickRoll = () => {
  return (
    <Box textAlign="center"   >
      <Global
        styles={`
          h1 {
            font-size: 6em;
          }

          h1 > span {
            position: relative;
            display: inline-block;
            color: #FF3C41;
            height: 1.25em;
            vertical-align: bottom;
            overflow: hidden;
          }

          h1 > span span {
            display: block;
            animation: animateWords 5s infinite ease;
          }

          @keyframes animateWords {
            0% {
              transform: translateY(0%);
            }
            25% {
              transform: translateY(-100%);
            }
            50% {
              transform: translateY(-200%);
            }
            75% {
              transform: translateY(-300%);
            }
            100% {
              transform: translateY(-400%);
            }
          }
        `}
      />
      <Heading as="h1" fontSize="50px" mb={4}>
        Never gonna
        <Text as="span" fontFamily="Geologica" fontWeight="500" display="block">
          <Text as="span">give you up</Text>
          <Text as="span">let you down</Text>
          <Text as="span">turn around</Text>
          <Text as="span">and hurt you</Text>
          <Text as="span">give you up</Text>
        </Text>
      </Heading>
    </Box>
  );
};

export default RickRoll;

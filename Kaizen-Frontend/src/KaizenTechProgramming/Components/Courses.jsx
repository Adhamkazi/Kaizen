import { Box, Image, Heading, Text, Button, Stack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import excel from '../../Gifs/excel.png';
import python from '../../Gifs/python.png';
import powerbi from "../../Gifs/powerbi.png"
import full from "../../Gifs/full.jpg"
import 'typeface-nunito';
import { Link } from 'react-router-dom';
const Course = () => {
  const courses = [
   
    {
      id: 2,
      imageSrc: python,
      heading: 'Python',
      description: ' Dive into the world of Python programming and discover its versatility in various domains, from web development to data analysis and machine learning.',
    },
    {
      id: 3,
      imageSrc: powerbi,
      heading: 'Power Bi',
      description: 'Unlock the power of data visualization and business intelligence with Power Bi, and create interactive reports and dashboards for data-driven decision-making.',
    },
    {
      id: 4,
      imageSrc: excel,
      heading: 'Excel',
      description: 'Excel beyond the basics and become proficient in data analysis, financial modeling, and automation with advanced Excel functionalities.',
    },
    {
        id: 5,
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhl9O0b7qoPTnlNo35SbvTSifOTASF9OeHOR1-s4we4TqOi5DF1idWjIyRLcuI-r-wnao&usqp=CAU',
        heading: 'Front-end Development',
        description: 'Build modern and responsive user interfaces using HTML, CSS, and JavaScript, and learn frameworks like React and Vue for efficient front-end development.',
      },
      {
        id: 1,
        imageSrc: full,
        heading: 'Full stack development',
        description: ' Learn how to build robust web applications from front to back, mastering both client-side and server-side technologies.',
      },
  ];

  const MotionBox = motion(Box);

  return (
    <div id="courses"> 
    <Heading mt="40px" fontFamily={"Nunito,sans-serif"}>Our Courses</Heading>   
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}spacing={6} w={"90%"}  margin={'auto'}  mt="40px">
      {courses.map(course => (
        <MotionBox
          key={course.id}
          borderWidth="1px"
          borderRadius="md"
          p={4}
          h="400px" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {course.imageSrc && <Image css={{
                  background: 'none',
                }} w={"50%"} margin={'auto'} src={course.imageSrc} alt={course.heading} />}
          <Stack mt={4} spacing={2} fontFamily={"Nunito,sans-serif"}>
            <Heading  fontFamily={"Nunito,sans-serif"} fontSize="25px">
              {course.heading}
            </Heading>
            <Text>{course.description}</Text>
            <Button  colorScheme="blue"><Link to={'/contact'}>Enroll Now</Link></Button>
          </Stack>
        </MotionBox>
      ))}
    </SimpleGrid>
    </div>

  );
};

export default Course;

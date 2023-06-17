import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div>
      <Box  data-aos="fade-up"  w={"80%"} m={"auto"} id="feature" mt={"40px"}  fontFamily={"Plus Jakarta Sans"}>
        <Heading fontSize={{base:"29px",md:"40px"}} color={"#1E344B"} lineHeight={{base:"35px",md:"40px"}} textAlign={{base:"left",md:"center"}}>
          Struggling to assemble a top-notch team?
        </Heading>

        <Text mt="20px" fontSize={{base:"18px",md:"20px"}} textAlign={"left"} lineHeight={{base:"25px",md:"30px"}} color={"#0A1D31"}>
          Experience the unparalleled potential of Kaizen's AI-powered platform as it empowers you to curate a team of exceptional product builders who excel in the fields of engineering, design, and
          marketing. With effortless ease, our platform allows you to handpick
          the best talents and swiftly assemble a top-notch team. Our on-demand
          team is poised to align seamlessly with your goals, injecting momentum
          into your projects and helping you regain control of your roadmap.
          Through our extensive network of outstanding experts, we provide you
          with access to unparalleled expertise, enabling your company to
          accomplish remarkable feats.
        </Text>
      </Box>
      <Flex  justifyContent={"space-between"} mt={"30px"} >
        <Image  w={{base:"20%",md:"7%"}} h={{base:"20%",md:"7%"}} display={useBreakpointValue({ base: "none", md: "block" })} src={'https://static.wixstatic.com/media/2b6261_dc6d3b88ce0948c2ab93cead276592cd~mv2.png/v1/fill/w_154,h_43,al_c,lg_1,q_85,enc_auto/logo-2.png'} />
        <Image  w={{base:"20%",md:"8%"}} h={{base:"20%",md:"8%"}} display={useBreakpointValue({ base: "none", md: "block" })} src={'https://static.wixstatic.com/media/2b6261_30570a3e8d9b46309ad4354ae9589ee1~mv2.png/v1/fill/w_154,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-3.png'} />
        <Image w={{base:"20%",md:"8%"}} h={{base:"20%",md:"8%"}}  src={'https://static.wixstatic.com/media/2b6261_72ff8f952d4348ecba15effa1f615d2f~mv2.png/v1/fill/w_143,h_40,al_c,lg_1,q_85,enc_auto/logo-4.png'} />
        <Image w={{base:"15%",md:"5%"}} h={{base:"15%",md:"5%"}}   src={'https://static.wixstatic.com/media/2b6261_7d8ed54467b14270b2666aada1909f03~mv2.png/v1/fill/w_131,h_43,al_c,lg_1,q_85,enc_auto/logo-5.png'} />
        <Image w={{base:"20%",md:"8%"}} h={{base:"20%",md:"8%"}}  src={'https://static.wixstatic.com/media/2b6261_42389da9d6574c2f8d3e56a7312cbfeb~mv2.png/v1/fill/w_186,h_43,al_c,lg_1,q_85,enc_auto/logo-6.png'} />
        <Image w={{base:"20%",md:"8%"}} h={{base:"20%",md:"8%"}} display={useBreakpointValue({ base: "none", md: "block" })} src={'https://static.wixstatic.com/media/2b6261_78809225e36b4464806e87dc234435ec~mv2.png/v1/fill/w_208,h_43,al_c,lg_1,q_85,enc_auto/logo-7.png'} />
        <Image w={{base:"20%",md:"8%"}} h={{base:"20%",md:"8%"}} display={useBreakpointValue({ base: "none", md: "block" })} src={'https://static.wixstatic.com/media/2b6261_450b86a1048e4d68ad7f8162c894c321~mv2.png/v1/fill/w_208,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-10.png'} />
      </Flex>

    </div>
  );
};

export default Feature;

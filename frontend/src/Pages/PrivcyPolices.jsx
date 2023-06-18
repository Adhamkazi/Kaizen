import {
  Box,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const PrivcyPolices = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Call AOS.refresh() after the component has mounted

    return () => {
      AOS.refresh(); // Call AOS.refresh() when the component unmounts
    };
  }, []);
  return (
    <div>
      <Box data-aos="fade-up" w={{ base: "80%", md: "80%" }} margin={"auto"} color={"black"} fontWeight={500}>
        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Privacy Policy for Kazien
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            At Kazien, accessible from https://kaizentech.co.in/, one of
            our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by Kazien and how we use it.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Kazien. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Consent
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          data-aos="fade-up"
          textAlign={"left"}
        >
          <Heading as="h2" color={"#0D47A1"}>
            Information we collect
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.{" "}
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"

        >
          <Heading as="h2" color={"#0D47A1"}>
            How we use your information
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            We use the information we collect in various ways, including to:
          </Text>
          <UnorderedList as="p" fontSize="lg" mt="20px">
            <ListItem mt="10px">
              Provide, operate, and maintain our website
            </ListItem>
            <ListItem mt="10px">
              Improve, personalize, and expand our websListIteme
            </ListItem>
            <ListItem mt="10px">
              Understand and analyze how you use our websListIteme
            </ListItem>
            <ListItem mt="10px">
              Develop new products, services, features, and funListItemionality
            </ListItem>
            <ListItem mt="10px">
              Communicate with you, either directly or through one ofListItemur
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItem>
            <ListItem mt="10px">Send you emaListItemListItem</ListItem>
            <ListItem mt="10px">Find and prevent fraud</ListItem>
          </UnorderedList>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Log Files
          </Heading>

          <Text as="p" fontSize="lg" mt="20px">
            Kazien follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Cookies and Web Beacons
          </Heading>

          <Text as="p" fontSize="lg" mt="20px">
            Like any other website, Kazien uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Advertising Partners Privacy Policies
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Kazien.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Kazien, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </Text>

          <Text as="p" fontSize="lg" mt="20px">
            Note that Kazien has no access to or control over these cookies
            that are used by third-party advertisers.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            Third Party Privacy Policies
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            Kazien's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. ​
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading as="h2" color={"#0D47A1"}>
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            Under the CCPA, among other rights, California consumers have the
            right to:
          </Text>

          <Text as="p" fontSize="lg">
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Text>
          <Text as="p" fontSize="lg">
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </Text>
          <Text as="p" fontSize="lg">
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Text>
          <Text as="p" fontSize="lg">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </VStack>

        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading fontSize={"55px"} color={"#0D47A1"}>
            GDPR Data Protection Rights
          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Text>

          <Text as="p" fontSize="lg" mt="20px">
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </Text>

          <Text as="p" fontSize="lg" mt="20px">
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </Text>

          <Text as="p" fontSize="lg" mt="20px">
          The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.


          </Text>
        </VStack>




        <VStack
          paddingTop={{ base: "100px", md: "40px" }}
          spacing="2"
          alignItems="flex-start"
          textAlign={"left"}
          data-aos="fade-up"
        >
          <Heading fontSize={"55px"} color={"#0D47A1"}>
          Children's Information

          </Heading>
          <Text as="p" fontSize="lg" mt="20px">
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

​
          </Text>
          <Text as="p" fontSize="lg" mt="20px">
          Kazien does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </Text>

        
        </VStack>
      </Box>
      <Footer/>
    </div>
  );
};

export default PrivcyPolices;

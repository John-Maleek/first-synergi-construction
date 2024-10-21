import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import ImagesList from "@/images.json";
import FooterCmp from "@/components/FooterCmp";
import SectionAnimation from "@/components/SectionAnimation";
import ServicesTextCmp from "@/components/ServicesTextCmp";
import BounceAnimation from "@/components/BounceAnimation";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";

const CoreValuesObj = [
  {
    title: "Quality",
    subtitle:
      "We are committed to delivering superior workmanship on every project, no matter the size or complexity.",
  },
  {
    title: "Innovations",
    subtitle:
      "We stay at the forefront of construction trends, using the latest technology and techniques to deliver exceptional results.",
  },
  {
    title: "Sustainabiliity",
    subtitle:
      "We are dedicated to creating environmentally responsible solutions that benefit our clients and the planet.",
  },
];

const TeamMembers = [
  { name: "Yusuf Salako", role: "Architect/Project Manager" },
  { name: "Ademola Azzan", role: "Architect/Project Manager" },
  { name: "Olanrewaju Oshinaike", role: "Project Architect" },
  { name: "Anthony Sunday Kingsley", role: "Quantity Surveyor" },
  { name: "Blessing Oyase", role: "Operations/HR Manager" },
  { name: "Oladoja Abdulfattah Adekunle", role: "Site Engineer" },
];

const TeamMemberCmp = ({ name, role, noBorder }: any) => {
  return (
    <Box
      border={noBorder ? "none" : "1px solid"}
      borderColor={"primary"}
      borderRadius={"16px"}
      color={"primary"}
      textAlign={"center"}
      p={noBorder ? "0" : "20px"}
    >
      <Heading fontSize={"20px"}>{name}</Heading>
      <Heading
        color={"secondary"}
        fontSize={"20px"}
        fontWeight={400}
        mt={"8px"}
      >
        {role}
      </Heading>
    </Box>
  );
};

export default function AboutUs() {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.6 });
  const location = useRouter();

  return (
    <>
      <Head>
        <title>First Synergi Homes - About us</title>
        <meta
          name="description"
          content="Building exceptional homes and a lifestyle of opulence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand-favicon.svg" />
      </Head>
      <main>
        <nav className="section-container">
          <Box
            display={{ lg: "block", base: "none" }}
            position={"absolute"}
            top={"40px"}
            w="full"
            left={0}
            px={"100px"}
            mx={"auto"}
            zIndex={2}
          >
            <Navbar />
          </Box>
          <Box
            display={{ lg: "block", base: "none" }}
            position={"fixed"}
            top={"40px"}
            w="full"
            left={0}
            px={"100px"}
            mx={"auto"}
            zIndex={2}
          >
            <Box
              display={isInView ? "none" : "block"}
              opacity={isInView ? 0 : 1}
              transition={"opacity .5s ease-in-out"}
              bg={"white"}
              boxShadow={"2px 2px 8px 0px rgba(0, 0, 0, 0.08)"}
              p="20px"
              borderRadius={"8px"}
            >
              <Navbar />
            </Box>
          </Box>
          <Box
            display={{ lg: "none", base: "block" }}
            position={"fixed"}
            top={"24px"}
            w="full"
            left={0}
            px={"16px"}
            zIndex={3}
          >
            <Box
              bg={"rgba(255, 255, 255, 0.98)"}
              boxShadow={"0px 12px 24px 6px rgba(153, 167, 177, 0.12)"}
              p="13px"
              borderRadius={"8px"}
            >
              <Navbar />
            </Box>
          </Box>
        </nav>
        <section ref={navRef}>
          <Box className="section-container" height={"120px"}></Box>

          <Box
            bg={"gray"}
            bgImage={"assets/about-us-header-img.png"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            py={{ lg: "160px", base: "60px" }}
          >
            <Box className="section-container">
              <Box
                maxW={"700px"}
                minH={{ lg: "300px", base: "auto" }}
                textAlign={{ lg: "left", base: "center" }}
              >
                <Text className="body-text-1" color={"secondary"} mb={"24px"}>
                  About First Synergi Construction
                </Text>
                <TypeAnimation
                  sequence={[
                    "Committed to Quality, Driven by Innovation",
                    1000,
                  ]}
                  speed={10}
                  style={{ color: "#fff" }}
                  wrapper="h2"
                  className="heading-2"
                  repeat={1}
                  cursor={false}
                />
              </Box>
            </Box>
          </Box>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Box
              pt={{ lg: "100px", base: "40px" }}
              pb={{ lg: "108px", base: "40px" }}
            >
              <Box w={{ lg: "55%", base: "full" }} maxW={"655px"}>
                <Text className="body-text-1" color={"secondary"}>
                  Who we are
                </Text>
              </Box>
              <Flex
                flexDirection={{ lg: "row", base: "column" }}
                mt={{ lg: "37px", base: "16px" }}
                gap={{ lg: "63px", base: "16px" }}
              >
                <Text
                  color={"primary"}
                  className="body-text-2"
                  text-align="justify"
                  w={{ lg: "50%", base: "full" }}
                >
                  Incorporated in Nigeria in 2007, First Synergi Construction
                  Limited primarily provides interior design and construction
                  services to the private and public sector . Operating from
                  their offices in Lekki Scheme 1, which also houses their
                  design studio and showroom(Waterflow).
                  <br />
                  <br />
                  Inspired by real life experiences, there was a need to build
                  good quality homes for everybody which has been lacking in
                  Nigeria for some time now. There was obviously a need for
                  builders of repute who do not compromise on quality.
                  <br />
                  <br />
                  For this reason FSCL has been able to build homes which are
                  comparable to the ones in any part of the western world, where
                  a lot of emphasis has been placed on quality, practicality,
                  spacial management and energy efficiency of the homes built.
                </Text>
                <Box
                  bgColor={"primary"}
                  px={{ lg: "42px", base: "16px" }}
                  pt={{ lg: "53px", base: "63px" }}
                  pb={{ lg: "104px", base: "66px" }}
                  h="fit-content"
                  w={{ lg: "50%", base: "full" }}
                  position={"relative"}
                >
                  <Text
                    textAlign={"center"}
                    className="body-text-1"
                    color={"secondary"}
                  >
                    MISSION STATEMENT
                  </Text>
                  <Text
                    fontSize={{ lg: "26px", base: "20px" }}
                    fontWeight={400}
                    lineHeight={"130%"}
                    mt={"36px"}
                    textAlign={"center"}
                    color={"#fff"}
                  >
                    Our mission is to offer cutting edge services in the area of
                    design and construction matching internationally accepted
                    standards
                  </Text>
                  <Box
                    bg={"#fff"}
                    width={{ lg: "200px", base: "100px" }}
                    height={{ lg: "200px", base: "100px" }}
                    position={"absolute"}
                    right={{ lg: -83, base: "-50px" }}
                    bottom={{ lg: -117, base: "-60px" }}
                    transform={"rotate(52deg) "}
                  />
                </Box>
              </Flex>
            </Box>
          </SectionAnimation>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Flex
              flexDirection={{ lg: "row", base: "column" }}
              mt={{ lg: "77px", base: "40px" }}
              gap={"38px"}
              position={"relative"}
            >
              <Box w={"full"}>
                <Text color={"secondary"} className="body-text-1">
                  our values
                </Text>
                <SimpleGrid
                  columns={{ lg: 3, base: 1 }}
                  gridGap={{ lg: "auto", base: "16px" }}
                  minChildWidth={"290px"}
                  mt={"34px"}
                >
                  {CoreValuesObj.map((obj, index) => (
                    <Box key={index} maxW={{ lg: "358px", base: "full" }}>
                      <Heading
                        color={"primary"}
                        fontSize={"23px"}
                        fontWeight={400}
                        lineHeight={"28px"}
                        letterSpacing={"-0.72px"}
                      >
                        {obj.title}
                      </Heading>
                      <Text
                        color={"primary"}
                        fontSize={"17.43px"}
                        lineHeight={"27px"}
                        fontWeight={400}
                        mt={"13px"}
                      >
                        {obj.subtitle}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </SectionAnimation>
        </section>
        <section className="section-container">
          <SectionAnimation>
            <Box
              w="full"
              bgImage={"assets/why-choose-us-img.png"}
              bgSize={"cover"}
              bgPosition={"center"}
              bgRepeat={"no-repeat"}
              px={{ lg: "80px", md: "32px", base: "16px" }}
              py={{ lg: "94px", md: "32px", base: "66px" }}
              mb={"40px"}
              mt={"60px"}
            >
              <Flex direction={"column"} justify={"center"} h={"100%"}>
                <Heading className="heading-2" color={"white"}>
                  Why choose us
                </Heading>

                <Box w={{ lg: "50%" }} mt={"24px"}>
                  <Text className="body-text-2" color={"#fff"}>
                    Choosing First Synergy Construction means choosing a partner
                    who is committed to your success. We work diligently to
                    ensure that your project is completed on time, within
                    budget, and to the highest possible standards. From initial
                    consultation to project completion, we prioritize open
                    communication, attention to detail, and a smooth,
                    stress-free experience.
                  </Text>
                </Box>

                <Button
                  label="Build with us"
                  mt={"47px"}
                  onClick={() => location.push("/contact-us")}
                />
              </Flex>
            </Box>
          </SectionAnimation>
        </section>

        <section className="section-container">
          <Box py={"70px"}>
            <Text
              color={"secondary"}
              className="body-text-1"
              textAlign={"center"}
            >
              MEET OUR TEAM
            </Text>
            <SectionAnimation>
              <Flex
                flexDirection={{ lg: "row", base: "column" }}
                justify={"center"}
                gap={{ lg: "69px", base: "40px" }}
                mt={"66px"}
              >
                <Box w={"100%"} maxW={"375px"} mx={{ lg: 0, base: "auto" }}>
                  <Box
                    position={"relative"}
                    w="full"
                    height={"421px"}
                    mb={"27px"}
                  >
                    <Image
                      src={"/images/Mr.Disu.jpg"}
                      alt="img"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </Box>
                  <TeamMemberCmp
                    name="Kamar Adeniyi Disu"
                    role="Managing Director"
                    noBorder
                  />
                </Box>
                <Box w={"100%"} maxW={"375px"} mx={{ lg: 0, base: "auto" }}>
                  <Box
                    position={"relative"}
                    w="full"
                    height={"421px"}
                    mb={"27px"}
                  >
                    <Image
                      src={"/images/akindele-makinde.png"}
                      alt="img"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </Box>
                  <TeamMemberCmp
                    name="Akindele Makinde"
                    role="Team Lead - Sales and Marketing"
                    noBorder
                  />
                </Box>
              </Flex>
              <Grid
                gridTemplateColumns={{
                  lg: "repeat(3, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                rowGap={{ lg: "24px", base: "32px" }}
                columnGap={"55px"}
                ml={{ lg: "auto", base: 0 }}
                mt={{ lg: "70px", base: "40px" }}
                height={"fit-content"}
              >
                {TeamMembers.map((member) => (
                  <GridItem key={member.name}>
                    <TeamMemberCmp
                      name={member.name}
                      role={member.role}
                      noBorder
                    />
                  </GridItem>
                ))}
              </Grid>
            </SectionAnimation>
          </Box>
        </section>
      </main>
      <FooterCmp />
    </>
  );
}

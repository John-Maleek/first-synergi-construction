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

const ServiceDetailCmp = ({
  heading = "",
  subtitle = "",
  bgImage = null,
  handleOpen = null,
}: any) => {
  return (
    <Flex
      bgColor={"primary"}
      bgImage={bgImage && bgImage}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      direction={"column"}
      alignItems={"center"}
      justify={"center"}
      w="full"
      color={"#fff"}
      p={{ lg: "40px", base: "20px" }}
      minH={"416px"}
    >
      {!bgImage && (
        <Box maxW={"394px"}>
          <Heading fontSize={"47px"} lineHeight={"100%"} fontWeight={500}>
            {heading}
          </Heading>
          <Text className="body-text-2" mt={"32px"}>
            {subtitle}
          </Text>
          <Text color={"secondary"} mt={"32px"}>
            Learn more
          </Text>
        </Box>
      )}
    </Flex>
  );
};

export default function Services() {
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
          <Box
            className="section-container"
            height={{ lg: "120px", base: "300px" }}
          ></Box>

          <Box
            bg={"gray"}
            bgImage={"assets/services-header-img.png"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            py={"160px"}
          >
            <Box className="section-container">
              <Box maxW={"700px"} minH={"300px"}>
                <Text className="body-text-1" color={"secondary"} mb={"24px"}>
                  Our Services
                </Text>
                <TypeAnimation
                  sequence={[
                    "Transforming Visions into Reality, One Service at a Time",
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
            <Box pt={"100px"} pb={"108px"}>
              <Flex mt={"37px"} gap={"63px"} maxW={"695px"}>
                <Text
                  color={"primary"}
                  className="body-text-2"
                  text-align="justify"
                  w="100%"
                >
                  We are dedicated to delivering top-tier building design,
                  construction, and interior finishes that meet international
                  quality standards. Our work explores the vast potential in
                  architecture and construction through technological
                  advancements and the continuous innovation of finishing
                  materials.
                  <br />
                  <br />
                  We take a consultative approach, prioritizing:
                  <br />
                  {/* <ul>
                    <li>Our strong relationships with clients</li>
                    <li>Our clients' connections to their environments</li>
                    <li>
                      The integration of our clients' buildings with their
                      surroundings and the broader urban landscape.
                    </li>
                  </ul> */}
                </Text>
              </Flex>
            </Box>
          </SectionAnimation>
        </section>
        <section className="section-container">
          <SimpleGrid columns={2}>
            <ServiceDetailCmp bgImage={"assets/service-img-1.png"} />
            <ServiceDetailCmp
              heading="Architectural Design"
              subtitle="A thorough and informative design brief is an imperative part of the design process. It is an essential point of reference not only for the architect"
            />
            <ServiceDetailCmp
              heading="Building Construction "
              subtitle="We offer a full line of building construction services, doing hard bid and design build construction on buildings and structures. "
            />
            <ServiceDetailCmp bgImage={"assets/service-img-2.png"} />
            <ServiceDetailCmp bgImage={"assets/service-img-3.png"} />

            <ServiceDetailCmp
              heading="Projec Management"
              subtitle="First Snergyi Construction Limited PM is a Nigerian owned and operated consultancy firm"
            />
          </SimpleGrid>
          <Box
            w="full"
            bgImage={"assets/why-choose-us-img.png"}
            bgSize={"cover"}
            bgPosition={"center"}
            bgRepeat={"no-repeat"}
            px={"80px"}
            py={"94px"}
            mb={"40px"}
          >
            <Flex
              direction={"column"}
              justify={"center"}
              h={"100%"}
              pt={{ lg: 0, base: "95px" }}
              pb={{ lg: 0, base: "126px" }}
            >
              <Heading className="heading-2" color={"white"}>
                Why choose us
              </Heading>

              <Box w={{ lg: "50%" }} mt={"24px"}>
                <Text className="body-text-2">
                  Choosing First Synergy Construction means choosing a partner
                  who is committed to your success. We work diligently to ensure
                  that your project is completed on time, within budget, and to
                  the highest possible standards. From initial consultation to
                  project completion, we prioritize open communication,
                  attention to detail, and a smooth, stress-free experience.
                </Text>
              </Box>

              <Button
                label="Build with us"
                mt={"47px"}
                onClick={() => location.push("/contact-us")}
              />
            </Flex>
          </Box>
        </section>
      </main>

      <FooterCmp />
    </>
  );
}

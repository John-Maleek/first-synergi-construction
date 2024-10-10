import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Circle,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import HomeProjectCmp from "@/components/HomeProjectCmp";
import BlogItemCmp from "@/components/BlogItemCmp";
import ImageList from "@/images.json";
import FooterCmp from "@/components/FooterCmp";
import SectionAnimation from "@/components/SectionAnimation";
import { useRouter } from "next/router";
import BounceAnimation from "@/components/BounceAnimation";
import { BlogArticles } from "@/static/blog";
import Link from "next/link";
import ProjectPicCmp from "@/components/ProjectPicCmp";
import ImagesList from "@/images.json";
import CorporateBuildingIcon from "@/components/icons/CorporateBuildingIcon";
import InteriorDesignIcon from "@/components/icons/InteriorDesignIcon";
import HealthCareIcon from "@/components/icons/HealthCareIcon";

export default function Home() {
  const router = useRouter();
  const navRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(navRef, { once: false, amount: 0.8 });
  const isInViewScroll = useInView(scrollRef, { once: false, amount: "all" });
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const expertiseImgs = [
    { img: "assets/expertiseImg1.png", label: "Architectural Design" },
    { img: "assets/expertiseImg2.png", label: "Building Construction" },
    { img: "assets/expertiseImg3.png", label: "Project Management" },
  ];

  const constructionServices = [
    {
      name: "Corporate Building",
      desc: "We understand you need a building that works for you and your organization, and it must function well",
      icon: <CorporateBuildingIcon boxSize={"64px"} />,
    },
    {
      name: "Health Care Construction",
      desc: "",
      icon: <HealthCareIcon boxSize={"64px"} />,
    },
    {
      name: "Interior Design",
      desc: "",
      icon: <InteriorDesignIcon boxSize={"64px"} />,
    },
  ];

  useEffect(() => {
    if (typeof document !== "undefined") {
      const scrolled = window.scrollY;

      const scrollWrapper = document.getElementById("scroll-wrapper");
      const scrollContainer = document.getElementById(
        "horizontal-scroll-container"
      );
      if (scrollContainer) {
        scrollWrapper?.addEventListener("scroll", (e) => {
          scrollContainer.scrollLeft = scrollWrapper.scrollTop;
        });
      }
    }
  }, [isInViewScroll]);

  return (
    <>
      <Head>
        <title>First Synergi Homes</title>
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
        <motion.section
          ref={navRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box
            bgImage={"/assets/HeroBgImg.png"}
            height={{ lg: "120vh", base: "100dvh" }}
            maxH={"1400px"}
            minH={"1093px"}
            bgPosition={"bottom"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
          >
            <Box color={"primary"} className="section-container" pt={"206px"}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4 }}
              >
                <Heading textAlign={"center"} className="heading-1">
                  Building the Future,
                  <br /> Restoring the Past
                </Heading>
              </motion.div>
              <Text
                textAlign={"center"}
                className="body-text-2"
                color={"primary"}
                maxW={"655px"}
                mx={"auto"}
                mt={"24px"}
              >
                Innovative construction solutions and unparalleled
                craftsmanship, tailored for your success.
              </Text>
              <Box mx={"auto"} w="fit-content">
                <Button
                  label="Build with us"
                  mt={"50px"}
                  onClick={() => router.push("/build-with-us")}
                />
              </Box>
            </Box>
          </Box>
        </motion.section>
        <Stack spacing={"20px"} px={"10px"}>
          <section className="section-container">
            <SectionAnimation>
              <Box py={{ md: "108px", base: "32px" }}>
                <Flex
                  flexDirection={{ md: "row", base: "column" }}
                  justify={"space-between"}
                  gap={{ base: "32px", md: 0 }}
                >
                  <Box w={{ md: "55%", base: "full" }} maxW={"557px"}>
                    <Text
                      fontSize={{ md: "20px", base: "16px" }}
                      fontWeight={600}
                      letterSpacing={"4px"}
                      textTransform={"uppercase"}
                      color={"secondary"}
                    >
                      first synergi construction
                    </Text>
                    <Heading
                      color={"primary"}
                      fontSize={{ md: "56px", base: "32px" }}
                      fontWeight={700}
                      lineHeight={"100%"}
                      letterSpacing={{ lg: "-1.12px", base: "-0.64px" }}
                      my={{ md: "21px", base: "16px" }}
                    >
                      Driven by integrity and excellence
                    </Heading>
                  </Box>
                  <Box color={"primary"} w="full" maxW={"557px"}>
                    <Text className="body-text-2">
                      At First Synergy Construction, we turn visions into
                      reality. With over 15 years of experience, our team
                      delivers top-notch construction solutions, ensuring
                      quality and satisfaction in every project.
                    </Text>
                    <Button
                      bgColor={"none"}
                      color={"secondary"}
                      border={"1px solid"}
                      borderColor={"secondary"}
                      _hover={{ color: "#fff", bgColor: "secondary" }}
                      label="Learn more about us"
                      transition={"background .5s linear"}
                      mt={"50px"}
                    />
                  </Box>
                </Flex>
              </Box>
            </SectionAnimation>
          </section>
          <section
            style={{
              backgroundColor: "#002E3B",
              position: "relative",
            }}
          >
            <SectionAnimation>
              <Box
                color={"white"}
                py={{ md: "98px", base: "72px" }}
                position={"relative"}
              >
                <Flex
                  className="section-container"
                  alignItems={"flex-start"}
                  flexDirection={{ md: "row", base: "column" }}
                  mt={{ md: "21px", base: "16px" }}
                  justify={"space-between"}
                  gap={{ base: "32px", md: 0 }}
                >
                  <Stack spacing={"21px"} maxW={"665px"}>
                    <Text
                      fontSize={{ md: "20px", base: "16px" }}
                      fontWeight={600}
                      letterSpacing={"4px"}
                      color={"secondary"}
                      textTransform={"uppercase"}
                    >
                      Our Expertise
                    </Text>
                    <Heading
                      fontSize={{ md: "56px", base: "32px" }}
                      letterSpacing={"-2.24px"}
                    >
                      Building with Expertise and Precision
                    </Heading>
                  </Stack>
                  <Box>
                    <Text color={"#fff"} className="body-text-2" maxW={"557px"}>
                      We are dedicated to transforming your visions into
                      reality. Our team of seasoned professionals ensures that
                      each project is managed with exceptional skill and a
                      commitment to excellence.
                    </Text>
                    <Button
                      bgColor={"primary"}
                      color={"secondary"}
                      border={"1px solid"}
                      borderColor={"secondary"}
                      _hover={{ color: "#fff", bgColor: "secondary" }}
                      label="Build with us"
                      transition={"background .5s linear"}
                      mt={"50px"}
                    />
                  </Box>
                </Flex>
                <Flex
                  position={"relative"}
                  right={0}
                  justify={"flex-end"}
                  gap={"10px"}
                  mt={"51px"}
                >
                  {expertiseImgs.map((item, index) => (
                    <Flex
                      key={index}
                      bgImage={item.img}
                      bgSize={"contain"}
                      bgRepeat={"no-repeat"}
                      w={"100%"}
                      maxW={"372px"}
                      h={"673px"}
                    >
                      <Heading
                        fontSize={"48px"}
                        mt={"auto"}
                        transform={
                          "rotate(-90deg) translateX(180px) translateY(-100px) "
                        }
                      >
                        {item.label}
                      </Heading>
                    </Flex>
                  ))}
                </Flex>
                {/* <Box
                className="no-scrollbar"
                id="scroll-wrapper"
                height={{ lg: "900px", base: "auto" }}
                overflow={"scroll"}
                mt={{ lg: "102px", base: "50px" }}
              >
                <Flex
                  ref={scrollRef}
                  className="no-scrollbar"
                  id="horizontal-scroll-container"
                  flexDirection={{ lg: "row", base: "column" }}
                  gap={{ lg: "64px", base: "40px" }}
                  width={"100%"}
                  position={"sticky"}
                  top={"0px"}
                  overflowX={"auto"}
                >
                  {ImageList.home.projects.map((obj, index) => (
                    <Link key={index} href={`/projects/${obj.id}`}>
                      <HomeProjectCmp key={index} data={obj} index={index} />
                    </Link>
                  ))}
                </Flex>
                <Box
                  display={{ lg: "block", base: "none" }}
                  bg={"none"}
                  height={{ lg: "700px", base: "auto" }}
                  position={"sticky"}
                  top={"0px"}
                  mt={"200px"}
                  zIndex={-1}
                />
                <Box
                  display={{ lg: "block", base: "none" }}
                  bg={"none"}
                  height={{ lg: "700px", base: "auto" }}
                  position={"sticky"}
                  top={"0px"}
                  mt={"200px"}
                  zIndex={-1}
                />
                <Box
                  display={{ lg: "block", base: "none" }}
                  bg={"none"}
                  height={{ lg: "200px", base: "auto" }}
                  position={"sticky"}
                  top={"0px"}
                  mt={"200px"}
                  zIndex={-1}
                />
              </Box>
              <Box textAlign={"center"}>
                <Heading
                  color={"secondary"}
                  fontSize={{ lg: "56px", base: "32px" }}
                  letterSpacing={"-2.24px"}
                >
                  We are trusted
                </Heading>
                <Text
                  fontSize={{ md: "20px", base: "16px" }}
                  fontWeight={400}
                  lineHeight={"130%"}
                  mt={"16px"}
                >
                  Since inception we’ve been working with amazing clients to
                  create meaningful
                  <br /> impact and compelling experiences
                </Text>
                <BounceAnimation>
                  <Flex
                    alignItems={"center"}
                    width={"full"}
                    maxW={isMobile ? "338px" : "full"}
                    mx={"auto"}
                    mt={"40px"}
                    gap={isMobile ? "34px" : "64px"}
                    justify={isMobile ? "space-between" : "center"}
                    position={"relative"}
                  >
                    <Image
                      src={ImageList.home.clients[0]}
                      alt="client-logo"
                      width={isMobile ? 110 : 202}
                      height={isMobile ? 56 : 104}
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                    <Image
                      src={ImageList.home.clients[1]}
                      alt="client-logo"
                      width={isMobile ? 64 : 118}
                      height={isMobile ? 46 : 85}
                      style={{
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                    <Image
                      src={ImageList.home.clients[2]}
                      alt="client-logo"
                      width={isMobile ? 101 : 186}
                      height={isMobile ? 49 : 81}
                      style={{
                        objectFit: "contain",
                        objectPosition: "top",
                      }}
                    />
                  </Flex>
                </BounceAnimation>
              </Box> */}
              </Box>
            </SectionAnimation>
          </section>
          <section style={{ backgroundColor: "#FFF6DE", position: "relative" }}>
            <SectionAnimation>
              <Box
                className="section-container"
                py={{ lg: "96px", base: "45px" }}
              >
                <Flex
                  color={"primary"}
                  alignItems={"flex-start"}
                  justify={"space-between"}
                  flexDirection={{ lg: "row", base: "column" }}
                >
                  <Box maxW={"50%"}>
                    <Heading
                      fontSize={{ lg: "56px", base: "32px" }}
                      letterSpacing={"-2.24px"}
                    >
                      Nigeria Certified Contractors
                    </Heading>
                  </Box>
                  <Stack spacing={"32px"} maxW={"538px"}>
                    {constructionServices.map((item, index) => (
                      <Box
                        borderBottom={"1px solid"}
                        borderColor={"primary"}
                        key={index}
                        pb={"16px"}
                      >
                        <Flex alignItems={"center"} gap={"16px"}>
                          {item.icon}
                          <Heading fontSize={"32px"}>{item.name}</Heading>
                        </Flex>
                        {item.desc && <Text>{item.desc}</Text>}
                      </Box>
                    ))}
                  </Stack>
                </Flex>
              </Box>
            </SectionAnimation>
            <Box
              bg={"#fff"}
              width={"200px"}
              height={"200px"}
              position={"absolute"}
              right={-100}
              bottom={-110}
              transform={"rotate(47.62deg) "}
            />
          </section>

          <section
            style={{
              backgroundColor: "#002E3B",
              position: "relative",
            }}
          >
            <SectionAnimation>
              <Box
                className="section-container"
                color={"white"}
                pt={{ md: "98px", base: "72px" }}
                pb={{ md: "219px", base: "72px" }}
                position={"relative"}
              >
                <Flex
                  alignItems={"flex-start"}
                  flexDirection={{ md: "row", base: "column" }}
                  mt={{ md: "21px", base: "16px" }}
                  justify={"space-between"}
                  gap={{ base: "32px", md: 0 }}
                >
                  <Stack spacing={"21px"} maxW={"665px"}>
                    <Text
                      fontSize={{ md: "20px", base: "16px" }}
                      fontWeight={600}
                      letterSpacing={"4px"}
                      color={"secondary"}
                      textTransform={"uppercase"}
                    >
                      Projects
                    </Text>
                    <Heading
                      fontSize={{ md: "56px", base: "32px" }}
                      letterSpacing={"-2.24px"}
                    >
                      Driven by integrity and excellence
                    </Heading>
                  </Stack>
                  <Box>
                    <Text color={"#fff"} className="body-text-2" maxW={"557px"}>
                      Explore our portfolio of successful projects that
                      demonstrate our expertise and commitment to excellence.
                      From commercial buildings to residential homes, our work
                      speaks for itself.
                    </Text>
                    <Button
                      bgColor={"primary"}
                      color={"secondary"}
                      border={"1px solid"}
                      borderColor={"secondary"}
                      _hover={{ color: "#fff", bgColor: "secondary" }}
                      label="View more projects"
                      transition={"background .5s linear"}
                      mt={"50px"}
                    />
                  </Box>
                </Flex>
                <Grid
                  gridGap={"30px"}
                  gridTemplateColumns={{
                    lg: "repeat(3, 1fr)",
                    base: "repeat(1, 1fr)",
                  }}
                  mt={{ base: "40px", lg: "92px" }}
                >
                  {ImagesList.projects.project_images.map((item, index) => (
                    <GridItem
                      key={index}
                      colSpan={{
                        lg: index === 0 || index === 3 ? 2 : 1,
                        base: 1,
                      }}
                    >
                      <Link key={item.id} href={`/projects/${item.id}`}>
                        <ProjectPicCmp
                          imgSrc={item.img}
                          location={item.location}
                          status={item.status}
                          projectName={item.projectName}
                        />
                      </Link>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </SectionAnimation>
          </section>

          <section className="section-container">
            <SectionAnimation>
              <Box py={{ lg: "96px", base: "45px" }}>
                <Flex
                  color={"primary"}
                  alignItems={"flex-start"}
                  justify={"space-between"}
                  gap={"48px"}
                  flexDirection={{ lg: "row", base: "column" }}
                >
                  <Box maxW={"486px"}>
                    <Heading className="heading-3">We are trusted</Heading>
                    <Text className="body-text-2" mt={"16px"}>
                      {`Since inception we’ve been working with amazing clients to
                      create meaningful impact and compelling experiences`}
                    </Text>
                  </Box>
                  <Box>
                    <Image
                      src={"assets/clientsImg.png"}
                      alt="clients"
                      width={666}
                      height={231}
                    />
                  </Box>
                </Flex>
              </Box>
            </SectionAnimation>
          </section>

          <Link
            href={
              "https://wa.me/2348122687371?text=Hello%2C%20I'm%20interested%20in%20your%20services."
            }
          >
            <Circle
              position={"fixed"}
              bottom={"30px"}
              boxShadow={"2px 2px 8px 0px rgba(0, 0, 0, 0.08)"}
              right={"30px"}
              size={"60px"}
              bg={"white"}
              zIndex={2}
            >
              <Image
                src={"/whatsApp-logo.svg"}
                alt="whatsapp-logo"
                width={28}
                height={28}
              />
            </Circle>
          </Link>
        </Stack>
      </main>

      <FooterCmp />
    </>
  );
}

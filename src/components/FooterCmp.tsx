import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterCmp = () => {
  const date = new Date();

  return (
    <footer>
      <Box p={{ lg: "10px", base: 0 }} color={"#fff"}>
        <Box style={{ backgroundColor: "#002E3B" }} w="full">
          <Box
            style={{ backgroundColor: "#002E3B" }}
            className="section-container"
            pt={{ lg: "80px", base: "64px" }}
            pb={"96px"}
            w="100%"
          >
            <Box
              borderBottom={{ lg: "1px solid", base: "none" }}
              borderColor={"secondary"}
            >
              <Flex w="100%" pb={"17.1px"} gap={"48px"}>
                <Image
                  src={"/assets/brand-logo-normal.svg"}
                  alt="brand-logo"
                  width={128}
                  height={48.8}
                  style={{ height: "auto", width: "auto" }}
                />
                <Flex
                  display={{ lg: "flex", base: "none" }}
                  alignItems={"center"}
                  w="full"
                  justify={"space-between"}
                  ml={"auto"}
                >
                  <Box>
                    <Flex
                      flexDirection={{ md: "row", base: "column" }}
                      gap={"40px"}
                      fontSize={"18px"}
                      fontWeight={600}
                      mt={{ base: "86px", md: 0 }}
                    >
                      <Link href={"/services"}>
                        <Text>Services</Text>
                      </Link>
                      <Link href={"/projects"}>
                        <Text>Projects</Text>
                      </Link>
                    </Flex>
                    <Flex
                      flexDirection={{ md: "row", base: "column" }}
                      gap={"40px"}
                      fontSize={"18px"}
                      fontWeight={600}
                      mt={{ base: "86px", md: "16px" }}
                    >
                      <Link href={"/about-us"}>
                        <Text>About us</Text>
                      </Link>
                      <Link href={"/contact-us"}>
                        <Text>Contact Us</Text>
                      </Link>
                    </Flex>
                  </Box>
                  <Box color={"#fff"} textAlign={"right"}>
                    <Flex
                      flexDirection={{ md: "row", base: "column" }}
                      justify={{ lg: "space-between", base: "center" }}
                      alignItems={{ base: "center" }}
                    >
                      <Flex
                        alignItems={"center"}
                        gap={"20px"}
                        ml={{ lg: "auto", base: 0 }}
                      >
                        <Link
                          href={
                            "https://www.facebook.com/profile.php?id=61562678024714&mibextid=LQQJ4d"
                          }
                        >
                          <Image
                            src={"/facebook-icon-white.png"}
                            alt="social-icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link href={"https://x.com/1stsynergihomes/"}>
                          <Image
                            src={"/twitter-icon-white.png"}
                            alt="social-icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link
                          href={"https://www.instagram.com/firstsynergihomes/"}
                        >
                          <Image
                            src={"/instagram-icon-white.png"}
                            alt="social-icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                        <Link
                          href={
                            "https://www.linkedin.com/company/first-synergi-homes/"
                          }
                        >
                          <Image
                            src={"/linked-in-icon-white.png"}
                            alt="social-icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </Flex>
                    </Flex>
                    <Stack mt={"12px"} spacing={"12px"}>
                      <a href="tel:+23408122687371">
                        <Text>tel: +(234) 081-2268-7371</Text>
                      </a>
                      <a href="mailto:info@firstsynergihomes.com">
                        <Text>email: info@firstsynergihomes.com</Text>
                      </a>
                    </Stack>
                  </Box>
                </Flex>
              </Flex>
              <Flex
                display={{ base: "flex", lg: "none" }}
                borderTop={{ base: "1px solid", lg: "none" }}
                borderColor={"secondary"}
                alignItems={"center"}
                w="full"
                pt={"60px"}
              >
                <Stack spacing={"16px"}>
                  <Link href={"/services"}>
                    <Text>Services</Text>
                  </Link>
                  <Link href={"/projects"}>
                    <Text>Projects</Text>
                  </Link>

                  <Link href={"/about-us"}>
                    <Text>About us</Text>
                  </Link>
                  <Link href={"/contact-us"}>
                    <Text>Contact Us</Text>
                  </Link>
                </Stack>
              </Flex>
              <Box color={"white"} mt={{ lg: "15px", base: "32px" }}>
                <Stack spacing={"16px"} fontSize={"18px"}>
                  <Text className="body-text-1" color={"secondary"}>
                    Lagos
                  </Text>
                  <Text className="body-text-2">
                    17 Emma Abimbola Cole Street,
                    <br /> Lekki Scheme 1, Lagos – Nigeria.{" "}
                  </Text>
                </Stack>
              </Box>
              <Box
                display={{ base: "block", lg: "none" }}
                color={"#fff"}
                mt={"50px"}
              >
                <Flex flexDirection={{ md: "row", base: "column" }}>
                  <Flex
                    alignItems={"center"}
                    gap={"20px"}
                    ml={{ lg: "auto", base: 0 }}
                  >
                    <Link
                      href={
                        "https://www.facebook.com/profile.php?id=61562678024714&mibextid=LQQJ4d"
                      }
                    >
                      <Image
                        src={"/facebook-icon-white.png"}
                        alt="social-icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link href={"https://x.com/1stsynergihomes/"}>
                      <Image
                        src={"/twitter-icon-white.png"}
                        alt="social-icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link href={"https://www.instagram.com/firstsynergihomes/"}>
                      <Image
                        src={"/instagram-icon-white.png"}
                        alt="social-icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/company/first-synergi-homes/"
                      }
                    >
                      <Image
                        src={"/linked-in-icon-white.png"}
                        alt="social-icon"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </Flex>
                </Flex>
                <Stack mt={"12px"} spacing={"12px"}>
                  <a href="tel:+23408122687371">
                    <Text>tel: +(234) 081-2268-7371</Text>
                  </a>
                  <a href="mailto:info@firstsynergihomes.com">
                    <Text>email: info@firstsynergihomes.com</Text>
                  </a>
                </Stack>
              </Box>
              <Text
                display={{ lg: "block", base: "none" }}
                mb={"18px"}
                ml={"auto"}
                w="fit-content"
              >
                &copy; {date.getFullYear()} First Synergi Construction Ltd.
              </Text>
            </Box>
            <Box
              display={{ lg: "block", base: "none" }}
              color={"#fff"}
              textAlign={"center"}
              mt={"40px"}
              ml={"auto"}
              w="fit-content"
            >
              <a href="https://www.designthngs.com" target="__blank">
                <Text fontSize={"16px"} fontWeight={400} lineHeight={"130%"}>
                  Designed by{" "}
                  <span style={{ color: "#C0972D" }}>Design Things Studio</span>
                </Text>
              </a>
            </Box>
            <Box display={{ lg: "none", base: "block" }} mt={"39px"}>
              <Text mb={"8px"} w="fit-content">
                &copy; {date.getFullYear()} First Synergi Construction Ltd.
              </Text>
              <Box color={"#fff"} w="fit-content">
                <a href="https://www.designthngs.com" target="__blank">
                  <Text fontSize={"16px"} fontWeight={400} lineHeight={"130%"}>
                    Designed by{" "}
                    <span style={{ color: "#C0972D" }}>
                      Design Things Studio
                    </span>
                  </Text>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default FooterCmp;

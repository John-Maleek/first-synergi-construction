import {
  Box,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./icons/FacebookIcon";

const FooterCmp = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const date = new Date();

  return (
    <footer style={{ padding: "10px" }}>
      <Box style={{ backgroundColor: "#002E3B" }}>
        <Box className="section-container" pt={"80px"} pb={"96px"} w="100%">
          <Box pt={"76px"} borderBottom={"1px solid"} borderColor={"secondary"}>
            <Flex w="100%" pb={"17.1px"} gap={"48px"}>
              <Image
                src={"assets/brand-logo-normal.svg"}
                alt="brand-logo"
                width={128}
                height={48.8}
                style={{ height: "auto", width: "auto" }}
              />
              <Flex
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
            <Box color={"white"} mt={"15px"}>
              <Stack spacing={"16px"} fontSize={"18px"}>
                <Text>
                  17 Emma Abimbola Cole Street,
                  <br /> Lekki Scheme 1, Lagos – Nigeria.{" "}
                </Text>
              </Stack>
            </Box>
            <Text mb={"18px"} ml={"auto"} w="fit-content">
              &copy; {date.getFullYear()} First Synergi Homes
            </Text>
          </Box>
          <Box
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
        </Box>
      </Box>
    </footer>
  );
};

export default FooterCmp;

import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseIcon from "./icons/CloseIcon";
import { motion } from "framer-motion";
import { InputCmp } from "./InputCmp";

const Navbar = () => {
  const location = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const navLinks = [
    { link: "Home", to: "/", active: location.pathname === "/" },
    {
      link: "Services",
      to: "/services",
      active: location.pathname === "/services",
    },
    {
      link: "Projects",
      to: "/projects",
      active: location.pathname === "/projects",
    },
    {
      link: "About us",
      to: "/about-us",
      active: location.pathname === "/about-us",
    },
    {
      link: "Contact us",
      to: "/contact-us",
      active: location.pathname === "/contact-us",
    },
  ];

  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document?.querySelector("body");
      if (body && isMobile) {
        body &&
          body.addEventListener("click", (e) => {
            e.stopPropagation();
            showMobileMenu && setShowMobileMenu(false);
          });
      }
    }
    if (typeof window !== "undefined") {
      if (window && isMobile) {
        window &&
          window.addEventListener("scroll", (e) => {
            e.stopPropagation();
            showMobileMenu && setShowMobileMenu(false);
          });
      }
    }
  }, [isMobile, showMobileMenu]);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setAgreed(false);
  };

  const handleSubmit = async () => {
    const val = { firstName, lastName, email, phone };

    if (!val.firstName || !val.lastName || !val.phone || !val.email) {
      toast({
        description: `Error: Please fill all required fields`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("access_key", "eec6ca8a-2e2e-4ba7-8b70-87e71dd8da62");
    formData.append("Form Title", "Brochure form");
    formData.append("firstName", val.firstName);
    formData.append("lastName", val.lastName);
    formData.append("email", val.email);
    formData.append("phone", val.phone);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Submitted",
        description: "Form submitted successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      window.open(
        `https://drive.google.com/file/d/1h8w1OwMxTLBGpn7qkb4fpnpwjum0NbPV/view`
      );
    } else {
      toast({
        description: `Something went wrong`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
    setLoading(false);
    resetForm();
    onClose();
  };

  return (
    <>
      <Box>
        <Flex alignItems={"center"} w="100%">
          <Link href={"/"}>
            <Image
              src={"/assets/brand-logo-black.svg"}
              alt="brand-logo"
              width={128}
              height={48}
              style={{ height: "auto", width: "auto" }}
              loading="eager"
            />
          </Link>
          <Flex
            display={{ lg: "inline-flex", base: "none" }}
            color={"primary"}
            p={"10px"}
            gap={"40px"}
            ml={"auto"}
          >
            {navLinks.map((item, index) => (
              <Link
                className="link"
                key={index}
                href={item.to}
                style={{ cursor: "pointer" }}
              >
                <Text
                  fontSize={"18px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"100%"}
                  color={item.active ? "secondary" : "primary"}
                  borderBottom={item.active ? `2px solid` : "none"}
                  borderColor={item.active ? "secondary" : "none"}
                >
                  {item.link}
                </Text>
              </Link>
            ))}
          </Flex>
          {isMobile &&
            (showMobileMenu ? (
              <CloseIcon
                cursor={"pointer"}
                color={"#131316"}
                boxSize={"24px"}
                ml={"auto"}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMobileMenu(false);
                }}
              />
            ) : (
              <HamburgerMenuIcon
                cursor={"pointer"}
                color={"#131316"}
                boxSize={"24px"}
                ml={"auto"}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMobileMenu(true);
                }}
              />
            ))}
        </Flex>
      </Box>
      {isMobile && showMobileMenu && (
        <Box w="full">
          <Box pb={"30px"}>
            <Stack spacing={"32px"} mt={"30px"}>
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -10 * (index + 1) }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.1 * (index + 1) }}
                >
                  <Link href={item.to} style={{ cursor: "pointer" }}>
                    <Text
                      className="link"
                      fontSize={"18px"}
                      fontStyle={"normal"}
                      fontWeight={"600"}
                      lineHeight={"100%"}
                      color={item.active ? "secondary" : "primary"}
                    >
                      {item.link}
                    </Text>
                  </Link>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Box>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        isCentered
        scrollBehavior="inside"
      >
        <ModalContent
          bg={
            "linear-gradient(180deg, rgba(0, 46, 59, 0.00) 0%, rgba(0, 46, 59, 0.80) 57.2%), url(/modal-bg.jpeg)"
          }
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
        >
          <ModalBody p={{ lg: "42px", base: "16px" }}>
            <Flex gap={"29px"}>
              <Box
                display={{ lg: "block", base: "none" }}
                w="full"
                maxW={"50%"}
                mt={"auto"}
                color="white"
              >
                <Text
                  fontSize={"32px"}
                  fontWeight={500}
                  lineHeight={"100%"}
                  letterSpacing={"-1.28px"}
                >
                  Learn more about{" "}
                </Text>
                <Heading
                  fontSize={"60px"}
                  fontWeight={700}
                  letterSpacing={"-2.4px"}
                  mt={"8px"}
                  color={"secondary"}
                >
                  Cullingham Place
                </Heading>
                <Text
                  fontSize={"16px"}
                  lineHeight={"20px"}
                  letterSpacing={"-0.64px"}
                >
                  Cullingham Place, defined by its sophisticated design,
                  seamless flow, and practical features, is on track to exceed
                  our past achievements and emerge as a new iconic landmark.
                </Text>
              </Box>
              <Box w="full" maxW={{ lg: "50%", base: "100%" }}>
                <form
                  onSubmit={(e) => {
                    e?.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Stack spacing={"16px"} bg={"white"} p="20px">
                    <InputCmp
                      label="First name"
                      type="text"
                      onChange={(e) => setFirstName(e?.target?.value)}
                      value={firstName}
                    />
                    <InputCmp
                      label="Last name"
                      type="text"
                      onChange={(e) => setLastName(e?.target?.value)}
                      value={lastName}
                    />
                    <InputCmp
                      label="Email"
                      type="email"
                      onChange={(e) => setEmail(e?.target?.value)}
                      value={email}
                    />
                    <InputCmp
                      label="Phone number"
                      type="number"
                      onChange={(e) => setPhone(e?.target?.value)}
                      value={phone}
                    />
                    <Flex gap={"16px"}>
                      <Checkbox
                        borderColor={"primary"}
                        colorScheme="green"
                        size={"lg"}
                        mt={0}
                        isChecked={agreed}
                        onChange={(e) => setAgreed(e?.target?.checked)}
                      />
                      <Text fontSize={"16px"} color={"#82838A"}>
                        By checking this box, I agree to the processing of
                        personal data
                      </Text>
                    </Flex>
                    <Button
                      label="Send me the brochure"
                      w="full"
                      mt={"16px"}
                      type="submit"
                      isDisabled={!agreed}
                      isLoading={loading}
                    />
                  </Stack>
                </form>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;

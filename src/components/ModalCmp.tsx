import {
  Box,
  Circle,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import CloseIcon from "./icons/CloseIcon";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  bodyText: React.ReactNode;
  bgImage: string;
}

const ModalCmp = ({ isOpen, onClose, heading, bodyText, bgImage }: IModal) => {
  const router = useRouter();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={"2xl"}
      isCentered
      scrollBehavior="inside"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent p={0}>
        <ModalBody className="modal-body" p={0}>
          <Flex
            h={"360px"}
            p={{ md: "43px", base: "20px" }}
            bg={`linear-gradient(180deg, rgba(0, 46, 59, 0.00) 0%, #002E3B 100%),url(${bgImage})`}
            position={"relative"}
          >
            <Circle
              size={"48px"}
              bg={"rgba(234, 214, 163, 0.25)"}
              position={"absolute"}
              top={"12px"}
              right={"12px"}
              onClick={onClose}
              cursor={"pointer"}
            >
              <CloseIcon fontSize={"20px"} color={"black"} />
            </Circle>
            <Heading
              fontSize={{ md: "47.1px", base: "32px" }}
              fontWeight={500}
              lineHeight={"100%"}
              maxW={{ md: "438px", base: "300px" }}
              alignSelf={"flex-end"}
              color={"#fff"}
            >
              {heading}
            </Heading>
          </Flex>
          <Box bg={"#fff"} p={{ md: "43px", base: "20px" }}>
            <Text className="blog-text" id="modal-text" color={"primary"}>
              {bodyText}
            </Text>
            <Flex
              flexDirection={{ md: "row", base: "column" }}
              gap={"16px"}
              justify={"space-between"}
              mt={"39px"}
              w="full"
            >
              <Button
                label="View projects"
                bgColor={"#fff"}
                color={"secondary"}
                border={"1px solid"}
                borderColor={"secondary"}
                _hover={{ color: "#fff", bgColor: "secondary" }}
                transition={"background .5s linear"}
                onClick={() => router.push("/projects")}
                w={{ base: "full", md: "fit-content" }}
              />
              <Button
                label="Build with us"
                onClick={() => router.push("/contact-us")}
                w={{ base: "full", md: "fit-content" }}
              />
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalCmp;

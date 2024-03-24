import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import svgImage from "../../circle-user-solid.svg";
import profileBack from "../../profileBack.png";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

const LogoutConfirmationModal = ({ isOpen, onClose, user, logoutHandler }) => {
  // ============================= //
  let boxBg = useColorModeValue("#000000E6 !important", "#111c44 !important");
  let mainText = useColorModeValue("white", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  // ============================= //
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        fontFamily="Work sans"
        bg="rgba(0, 4, 4, 0.7)"
        backdropFilter="blur(4px)"
        borderRadius="3%"
        p="20px"
      >
        <ModalHeader textAlign="center" fontWeight="600" color={mainText}>
          Logout Confirmation
        </ModalHeader>
        <ModalCloseButton
          color="white"
          _focus={{ border: "none" }}
          _hover={{ bg: "transparent", color: "#6d43d3 " }}
        />
        <ModalBody textAlign="center">
          <Flex flexDirection="column" alignItems="center">
            <Image src={profileBack} maxW="100%" borderRadius="20px" />
            <Image
              src={svgImage}
              border="5px solid black"
              borderRadius="50%"
              width="68px"
              height="68px"
              mt="-38px"
              p="7px"
            />
            <Text fontWeight="500" color={mainText} fontSize="xl" mt="10px">
              {user && user.name}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              {user && user.email}
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button
            varint="outline"
            border="1px solid white"
            fontWeight="500"
            fontSize="xl"
            color="white"
            bg="transparent"
            mr="20px"
            cursor="pointer"
            _hover={{ bg: "#c10908", color: "white" }}
            onClick={() => {
              onClose();
              logoutHandler();
            }}
          >
            Logout
          </Button>
          <Text
            fontWeight="500"
            color={mainText}
            fontSize="xl"
            cursor="pointer"
            _hover={{ color: "#804ff9 " }}
            onClick={onClose}
          >
            Cancel
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogoutConfirmationModal;

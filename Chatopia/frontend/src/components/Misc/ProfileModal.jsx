import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import svgImage from "../../circle-user-solid.svg";
import profileBack from "../../profileBack.png";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  // ============================= //
  let boxBg = useColorModeValue("transparent !important", "#111c44 !important");
  let mainText = useColorModeValue("white", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  // ============================= //

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {console.log(user)}
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Button onClick={onOpen}>{user.name}</Button>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent 
            bg="rgba(0, 4, 4, 0.6)"
            backdropFilter="blur(4px)"
            borderRadius="3%"
        >
          <ModalHeader
            color="white"
            fontSize="2xl"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            My Profile
          </ModalHeader>
          <ModalCloseButton 
            color="white"
            _hover={{ bg: "transparent", color: "#6d43d3 " }}
          />
          <ModalBody color="white"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"

          >
            <Flex
              borderRadius="20px"
              bg={boxBg}
              p="20px"
              h="345px"
              w={{ base: "315px", md: "345px" }}
              alignItems="center"
              direction="column"
            >
              <Image
                src={profileBack}
                maxW="100%"
                borderRadius="20px"
              />
              <Flex flexDirection="column" mb="30px">
                <Image
                  src={svgImage}
                  border="5px solid black"
                  mx="auto"
                  borderColor={boxBg}
                  width="68px"
                  height="68px"
                  mt="-38px"
                  borderRadius="50%"
                  p = "7px"
                />
                <Text
                  fontWeight="600"
                  color={mainText}
                  textAlign="center"
                  fontSize="xl"
                >
                  {user && user.name}
                </Text>
                <Text
                  color={secondaryText}
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="500"
                >
                  {user && user.email}
                </Text>
              </Flex>
              <Flex justify="space-between" w="100%" px="36px">
                <Flex flexDirection="column">
                  <Text
                    fontWeight="600"
                    color={mainText}
                    fontSize="xl"
                    textAlign="center"
                  >
                    17
                  </Text>
                  <Text color={secondaryText} fontWeight="500">
                    Posts
                  </Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text
                    fontWeight="600"
                    color={mainText}
                    fontSize="xl"
                    textAlign="center"
                  >
                    9.7k
                  </Text>
                  <Text color={secondaryText} fontWeight="500">
                    Followers
                  </Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text
                    fontWeight="600"
                    fontSize="xl"
                    color={mainText}
                    textAlign="center"
                  >
                    274
                  </Text>
                  <Text color={secondaryText} fontWeight="500">
                    Following
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

   
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;

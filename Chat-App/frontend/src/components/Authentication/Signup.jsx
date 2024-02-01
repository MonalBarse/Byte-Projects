import {
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import React, { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setSetshow] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");

  function handleClick() {
    setSetshow(!show);
  }
  const isSignupDisabled =
    !username || !email || !password || password !== confirmPass;
    /* The isSignupDisabled variable will be true if any of these conditions are met. This means the signup button will be disabled if: The username is empty or undefined.  The email is empty or undefined. The password is empty or undefined.The password is not equal to the confirmPass. */

    const submitHandler = () => {
       /*  fetch("http://localhost:5000/api/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
            }); */
        }
  return (
    <VStack spacing="5px">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          placeholder="Confirm Your Password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="green"
      width={"100%"}
      style={{marginTop: 10}}
      onClick={submitHandler}
      isDisabled={isSignupDisabled}>
        Signup
      </Button>
    </VStack>
  );
}

export default Signup;

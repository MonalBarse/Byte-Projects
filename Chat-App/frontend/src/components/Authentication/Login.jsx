import {
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack, 
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";

import {useState} from 'react'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setSetshow] = useState(false);
  const isSiginpDisabled =
   !email || !password ;

  const handleClick = () => { 
    setSetshow(!show);
  }
  const submitHandler = () => {
  }
  return (
    <VStack spacing="5px">
  
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
     
      <Button
        colorScheme="green"
        width={"100%"}
        style={{ marginTop: 10 }}
        onClick={submitHandler}
        isDisabled={isSiginpDisabled}
      >
        Sign In!
      </Button>
    </VStack>
  );
}

export default Login;

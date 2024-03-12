import {
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  VStack, 
  Input,
  useToast
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import {useState} from 'react'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const isSiginpDisabled =!email || !password ;
  const toast = useToast();
  let navigate = useNavigate();


  const handleClick = () => { 
    setShow(!show);
  }
  const submitHandler =async () => {
    setLoading(true);
    if(!email || !password ){
      toast({
        title: "Fill all the fields",
        description: error.response.data.message ,
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },};
      const { data } = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        },
        config
      );
      toast({
        title: "Logg In Successful",
        description: "Let's Chat!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "bottom"
      });
      console.log(data);
      // localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chat")
    } catch (error) {
      toast({
        title: "Error",
        description: error.response.data.message ,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom"
      });
      
      console.log(error);
      setLoading(false);
    }
  };
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
            // type={show ? "text" : "password"}
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
        isDisabled={isSiginpDisabled}
        onClick={submitHandler}
      >
        Sign In!
      </Button>
    </VStack>
  );
}

export default Login;

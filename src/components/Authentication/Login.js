import React, { useState } from 'react';
import { FormControl,  FormLabel, } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { VStack } from "@chakra-ui/layout"
import { Button }  from "@chakra-ui/button"

function Login(props) {
  const [show, setShow] = useState(false)
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
    const handleClick = () => setShow(!show)
  const submitHandler = () => {}
  return (
  <>
    <VStack spacing='5px' color='black'>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder= 'enter your email'
            onChange={(e)=>setEmail(e.target.value)}
          />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup>
          <Input placeholder= 'enter your password'
            type={ show? "text": "password"}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            <Button h="1.75" size="sm" onClick={handleClick} >
              {show ? "hide": "show"}
            </Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        Login
      </Button>
            <Button
      colorScheme="red"
      width="100%"
      style={{marginTop:15}}
      onClick={()=> {
        setEmail("guest@example.com")
        setPassword("12345")
      }}
      >
        get guess credentials 
      </Button>
    </VStack>
  </>
  );
}

export default Login;
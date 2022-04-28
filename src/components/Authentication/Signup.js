import React, { useState } from 'react';
import { FormControl,  FormLabel, } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { VStack } from "@chakra-ui/layout"
import { Button }  from "@chakra-ui/button"
//POST https://api.cloudinary.com/v1_1/dbigym4pt/image/upload
function Signup(props) {
  const [show, setShow] = useState(false)
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [confirmpassword, setconfirmpassword] = useState([])
  const [pic, setPic] = useState([])
    const [loading, setLoading] = useState(false)
  const handleClick = () => setShow(!show);
  const postDetails =(pics) => {
    setLoading(true);
    if( pic === undefined){
      
    }
  };
  const submitHandler = () => {}
  return (
  <>
    <VStack spacing='5px' color='black'>
      <FormControl id='first-namer' isRequired>
        <FormLabel>First Name</FormLabel>
        <Input placeholder= 'enter your name'
          onChange={(e)=>setName(e.target.value)}
          />
      </FormControl>
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
      <FormControl id='password' isRequired>
        <FormLabel> confirm password </FormLabel>
        <InputGroup>
          <Input placeholder= 'confirm your password'
            type={ show? "text": "password"}
              onChange={(e)=>setconfirmpassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
            <Button h="1.75" size="sm" onClick={handleClick} >
              {show ? "hide": "show"}
            </Button>
            </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel> Upload your picture</FormLabel>
        <Input
        type="file"
        p={.5}
        accept="image/*"/>
        onChange={(e)=> postDetails(e.target.value)}
      </FormControl>

      <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}
      >
        signup
      </Button>
    </VStack>
  </>
  );
}

export default Signup;
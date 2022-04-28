import React from 'react';
import { Container, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import Login from './../../components/Authentication/Login'
import Signup from './../../components/Authentication/Signup'
function Homepage(props) {
  return (
    <>
    <Container maxW= 'xl'>
    <Box
    d='flex'
    justifyContent="center"
    p={3}
    w="100%"
    m="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
      <Text fontSize='4xl' fontFamily='Work Sans'> Talk A Live </Text>
    </Box>
    <Box bg="white"
      w ="100%"
      p={4} 
      borderRadius="lg" 
      borderWidth="1px">
      <Tabs variant='soft-rounded'>
  <TabList>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>
    </Container>;
    </>
  );
}

export default Homepage;
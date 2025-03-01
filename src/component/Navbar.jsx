import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"}  p={1} bg={"blue.300"}>
        <Text>My Library</Text>
        <Flex justifyContent={"space-evenly"} gap={4} p={2}>
       <Link to="/">Home</Link> 
       <Link to="/login">Login</Link> 
       <Link to="/register">Register</Link> 
       </Flex>
    </Flex>
  )
}

export default Navbar

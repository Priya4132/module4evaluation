import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const user=useSelector((state)=>state.user);

  return (
<>
   <Heading>Welcome to  Books Library Management App</Heading> 
   {user &&  <Text>{user.email}</Text>}
   </>
  )
}

export default Home

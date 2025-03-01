import { logout } from '@/redux/actions/authActions';
import { HStack, Text,Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const MyBooksPage = () => {
    const user=useSelector((state)=>state.user);
    const userDetails=localStorage.getItem("user");
    console.log(userDetails);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    //logout function

   const handleLogout=()=>{
        dispatch(logout());
        navigate("/");
    }
  return (
    <HStack>
        <Button float={"right"}
        onClick={handleLogout}
        >Logout</Button>
       {user &&  <Text>{user.email}</Text>}
    </HStack>
  )
}

export default MyBooksPage

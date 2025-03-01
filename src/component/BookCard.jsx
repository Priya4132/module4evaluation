import React from 'react'
import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooks } from '@/redux/actions/booksactions';
import { Navigate, useNavigate } from 'react-router-dom';

const BookCard = ({book}) => {
    const user=useSelector((state)=>state.auth.user);
    const userDetails=JSON.parse(localStorage.getItem("user"))||[];
    const navigate=useNavigate();
//     if(user ){

  
//     const newUsers=Object.entries(user);
//     const userArray=newUsers.map(([key,value])=>({id:key,...value}));
//     console.log(userArray.uid, "user id")
//     console.log(userArray, "user details")
// }

const dispatch=useDispatch();

const handleAddBook=(id,userId)=>{
    if(user){
        dispatch(addBooks(id, userId))
    }
    else{
        alert("Please login to add Books");
        navigate("/login")

    }
   
    

}

  return (
   <>
    <GridItem>
         <Image src={book.coverImage} width={"150px"}/>
           <Text>{book.title}</Text>
          <Text>{book.author}</Text>
           <Button onClick={()=>handleAddBook(book.id, userDetails.uid)}>Want To Read</Button>
    </GridItem>
   </>
  )
}

export default BookCard

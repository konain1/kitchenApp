import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect,useState } from 'react';
import React from 'react'

function MembersCard() {

  const responsive = {
 
  desktop: {
    breakpoint: { max: 3000, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const [users,setUsers] = useState([])
useEffect(() => {

  fetch("http://localhost:3001/users")
      .then((response) => {
          if (!response.ok) {
              throw new Error("Failed to fetch users");
          }
          return response.json();
      })
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
}, []);



  return (
    <div  className='w-100 border border-white '>
 
  <Carousel responsive={responsive}>
  {users.map((item,key)=><div key={key} className='h-44 w-100 border border-white flex justify-center items-center  flex-col'>
    <div>{item.email}</div>
    <div>{item.username}</div>
    <div>{item._id}</div>

  </div>)}


  
    
</Carousel>
    </div>
  )
}

export default MembersCard
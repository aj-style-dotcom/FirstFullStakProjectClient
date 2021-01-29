import Post from "../../Components/Post/Index";
import {useState, useEffect} from "react";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Button, Container} from 'semantic-ui-react';

const Home = ()=>{
  
  const [allUsers, setAllUsers] = useState([]);
  
  
  useEffect(()=>{
    axios.get(
      "http://localhost:8000/api/")
      .then((resp)=>{
        setAllUsers(resp.data)
        console.log("seted")
      })
      .catch(err => console.log(err))
   
  }
  )
  
  
  

  return (
  <Container centre>

  <Button fluid><Link to="crPost">create new user</Link></Button><br/>
    {
      allUsers.map(function(user, index){
        return (<Post _users={user}/>)
      })
    }
    

</Container>)
}



export default Home;
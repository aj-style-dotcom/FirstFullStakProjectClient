import axios from "axios";
import {Link} from "react-router-dom";
import {Card, Button} from 'semantic-ui-react'
  
const Post = (props) =>{
  
 
 
 const deleteusr = ()=>{
   
    axios.delete(`http://localhost:8000/api/${props._users.name}`)
      .then((response)=>{
        console.log("user deleted")
      })
      .catch(err => console.log(err));
      
      
 }
    
  const cName=`upPost/`+(props._users.name)


  
  return (<div>
  
   <Card fluid>
      <Card.Content>
      
        <Card.Header>{props._users.name}</Card.Header>
        <Card.Meta>{props._users.gender}</Card.Meta>
        <Card.Meta>{props._users.email}</Card.Meta>
        <Card.Description>
          {props._users.bio}</Card.Description>
        
        <Card.Meta>{props._users.address}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            <Link to={cName}>update</Link>
          </Button>
          <Button basic color='red' onClick={deleteusr}>
            delete user
          </Button>
        </div>
      </Card.Content>
    </Card>


  
  
</div> )
  
}

export default Post;



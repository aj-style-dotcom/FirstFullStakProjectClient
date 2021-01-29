import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react';
import axios from "axios";



class CreateUser extends Component {
  state = {
    name :'',
    gender:'',
    email:'',
    bio :'',
    address:''
  }
  
  

  handleChange = (e) => {
    this.setState({
    [e.target.name] : e.target.value
    })
    console.log(e.target.value)
  }
  
  onSubmitForm=()=>{
    axios.post("http://localhost:8000/api/", this.state)
      .then((res)=>{
        alert(res.data)
      })
      .catch(err=>alert(err))
      this.setState({
        name :'',
        gender:'',
        email:'',
        bio :'',
        address:''
      });
   

  }




  render() {
    const { name, email, gender, bio, address } = this.state
    return (<Segment>
      <Form onSubmit={this.onSubmitForm} >
        <Form.Group widths='equal'>
        
          <Form.Input fluid 
          label='name' 
          value={name}
          required
          onChange={this.handleChange}
          name='name'/>
         

          <Form.Input
            fluid
            label='Gender'
            required
            value={gender}
            name='gender'
          onChange={this.handleChange}/>
         

          <Form.Input fluid 
          label='email' 
          value={email}
          required
          onChange={this.handleChange}
          name='email' />
          
        </Form.Group>
        <Form.TextArea label='bio' 
          onChange={this.handleChange}
          required
        name='bio'
        value={bio}/>
        
          <Form.Input fluid label='address' 
          onChange={this.handleChange}
          name='address'
          required
          value={address} />
          
        <Form.Button content='Submit' fluid primary>Submit</Form.Button>
      </Form>
      </Segment>
      
    )
  }
}

export default CreateUser;





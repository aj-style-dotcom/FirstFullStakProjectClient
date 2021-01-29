import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react';
import axios from "axios";



class UpdateUser extends Component {
  constructor(props){
    super(props)
  
  this.state = {
    name :'',
    gender:'',
    email:'',
    bio :'',
    address:''
  }
  }
  url = "http://localhost:8000/api/"+this.props.match.params.name;
  
  componentDidMount(){
    axios.get(this.url)
      .then((res)=>{
        this.setState({
          name:res.data.name,
          gender:res.data.gender,
          email:res.data.email,
          bio:res.data.bio,
          address :res.data.address
        })
      })
      .catch(err =>console.log(err))
  }
  

  handleChange = (e) => {
    this.setState({
    [e.target.name] : e.target.value
    })
    console.log(e.target.value)
  }
  
  onSubmitForm=()=>{
    axios.put(this.url, this.state)
      .then((res)=>{
        alert(res.data)
      this.setState({
        name :'',
        gender:'',
        email:'',
        bio :'',
        address:''
      });
      })
      .catch(err=>alert(err))
      
   

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
            value={gender}
            name='gender'
            required
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

export default UpdateUser;
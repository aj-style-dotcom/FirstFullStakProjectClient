import {Link} from "react-router-dom";
import React, { Component } from 'react'
import { Segment, Menu} from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
      <Menu secondary>
      
        <Menu.Item
          name='home'
          
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          ><Link to="/">Home</Link></Menu.Item>
          

        <Menu.Item
          name='about us'
          active={activeItem === 'about us'}
          onClick={this.handleItemClick}
        ><Link to="">about us</Link></Menu.Item>
        
      
        <Menu.Item
          name='contact us'
          active={activeItem === 'contact us'}
          onClick={this.handleItemClick}
        ><Link to="">Contact us</Link></Menu.Item>
      
      </Menu>
      </Segment>
    )
  }
}
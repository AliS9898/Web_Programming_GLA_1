import React from 'react';
import Urban_Planning from "./Urban_Planning.png";
import CommunityComp from './components/CommunityComp.js';
import './App.css';

class Icons extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
    imageValue: null,
    balance: 0,
    
  };
  this.clickHandler = this.clickHandler.bind(this);
}
//sets the state.name to the 'id' of the button clicked
  clickHandler(event) {
    if (event.target.id === 'CommunityComp') {
      this.setState({imageValue:<CommunityComp /> })
      console.log("City is clicked");
     } 
  }
  render() {
      return (
      <div onClick = {this.clickHandler} > 
      <button>
        <img src={Urban_Planning} id = 'CommunityComp' alt= "Urban_Planning" className = "Calculator"/> 
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <div>
          {this.state.imageValue}
          </div>
      </div>
     
    );
  }
}
export default Icons;

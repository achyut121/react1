import './App.css';
import Header from './Header';
// import React,{useState} from 'react';
import FunctionalComponent from './FunctionalComponent';
import React, { Component } from 'react';
import ClassComponent from './ClassComponent';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFunctional:false,
      isClass:false
    };
  }
  

  //  const showHide1 = () => {
  //   this.setState({isFunctional : !this.state.isFunctional});
  // }
  render() {
    return (
      <div className='App'>
        <Header />
        
        <div className='buttons'>
        <button  className="btn functonal"onClick={() => {
           this.setState({isFunctional : !this.state.isFunctional});
            }}>Click here for Functional Component</button>
        <button className='btn class'  onClick={() => {
           this.setState({isClass : !this.state.isClass});
            }}> Click here for Class Component</button>
        </div>
        {this.state.isFunctional === true ? <FunctionalComponent /> : null}
        {this.state.isClass === true? <ClassComponent /> : null}
      </div>
    )
  }
}

export default App

  

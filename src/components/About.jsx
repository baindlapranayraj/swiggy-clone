import React, { Component } from 'react'
import AboutClass from './AboutClass'

export class About extends Component {

  constructor(props){
    super(props)
    console.log("Parent constructor")
 
  }

  componentDidMount(){
    console.log("Parent Component Did Mount")
  }

  render() {
    console.log("Parent Render")
    return (
      <div>
        <h1>This is About section</h1>
        <AboutClass name={"Raj through prop"}/>
      </div>
    )
  }
}

export default About
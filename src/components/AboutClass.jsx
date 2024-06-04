import React, { Component } from 'react'


class AboutClass extends Component {

  constructor(props){
    super(props);

    this.state={
      user : "Pranay",
      count : 1
    }

    console.log("child constructor")
  }

  componentDidMount(){
    console.log("Child Component Did Mount")
  }

  render() {

    console.log("child render")
    // const { name } = this.props;
    const {user,count} = this.state;

    return (
      <div className='h-screen text-3xl text-center'>
        {count}
        <button className='rounded-full ml-3 font-bold bg-white w-36 h-36'
        onClick={() =>{
          this.setState({
            user:user==="Pranay"?"Mani":"Pranay",
            count:this.state.count+1
          })
          
        }}
        >{user}</button>
        {/* {console.log(`componet load ${count}`)} */}
        </div>
      
    )
  }
}

export default AboutClass;
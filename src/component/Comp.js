import React, { Component } from 'react'

 class newComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"subscribe"
      }
    }
  render() {
    return (
      <div><h1>{this.state.message}</h1></div>
    )
  }
}

export default newComp
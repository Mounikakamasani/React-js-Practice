import React, { Component } from 'react'
//class component
//to get class code type 'rce'

class ClassClick extends Component {
    clickHandler(){
        console.log('clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
        
      </div>
    )
  }
}

export default ClassClick

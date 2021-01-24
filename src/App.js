import React from 'react'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number : 0};
  this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState)=>{
      return {number : prevState.number+1}
    })
  }

 
  render() {
    return (
      <div>
          <h2>It is {this.state.number}.</h2>
        <button onClick={this.increment}>Increment</button>
          
      </div>
    );
  }
}

export default MyComponent;



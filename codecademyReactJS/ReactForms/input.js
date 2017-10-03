

//He said to them, "Most certainly I tell you, there is no one who has left house, or wife, or brothers, or parents, or children,
//for the Kingdom of God's sake (Luke 18:29)

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} value={this.state.userInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);


REACT FORMS
Write an Input Event Handler
In this exercise, you will define a function that gets called whenever a user enters or deletes any character.

This function will be an event handler. It will listen for change events. You can see an example of an event handler listening for change events in Example.js.
1.
Select Input.js.

Before Input's render function, write a new method named handleUserInput.

Give this method one parameter, named e.

Inside of this function's body, call this.setState. Set the state's userInput property equal to e.target.value.

e.target.value will equal the text in the <input /> field. You are setting this.state.userInput equal to whatever text is currently in <input />.

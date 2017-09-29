
//And they answered and said unto him, Where, Lord? And he said unto them, 
//Wheresoever the body is, thither will the eagles be gathered together.(Luke 17:37)

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    super(props);
    this.state = { title: 'Best App'};
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));


THIS.STATE
Access a Component's state
To read a component's state, use the expression this.state.name-of-property:

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
The above component class reads a property in its state from inside of its render function.

Just like this.props, you can use this.state from any property defined inside of a component class's body.

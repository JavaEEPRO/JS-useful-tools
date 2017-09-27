import React from 'react';
import ReactDOM from 'react-dom';

//neither will they say, 'Look, here!' or, 'Look, there!' for behold, the Kingdom of God is within you." (Luke 17:21)

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'whatever-your-name-is-goes-here';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

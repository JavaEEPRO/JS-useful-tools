
//but in the day that Lot went out from Sodom, it rained fire and sulfur from the sky, and destroyed them all(Luke 17:29)

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp = "Hello"/>, document.getElementById('app'));              // here added prop

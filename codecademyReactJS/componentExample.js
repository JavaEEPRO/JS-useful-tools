import React from 'react';
import ReactDOM from 'react-dom';

//And when he saw them, he said unto them, Go shew yourselves unto the priests. 
//And it came to pass, that, as they went, they were cleansed.(Luke 17:14)

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);

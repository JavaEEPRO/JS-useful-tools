
//Likewise, even as it happened in the days of Lot: they ate, they drank, they bought, they sold, they planted, they built(Luke 17:28)

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>                                  //here we injected props
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer/>, document.getElementById('app'));

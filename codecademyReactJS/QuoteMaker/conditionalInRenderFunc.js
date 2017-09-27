import React from 'react';
import ReactDOM from 'react-dom';

//Being asked by the Pharisees when the Kingdom of God would come, he answered them, 
//"The Kingdom of God doesn't come with observation (Luke 17:20)

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let outputMsg;
    if (fiftyFifty) 
    { outputMsg = "Tonight I'm going out WOOO"}
    else
    {outputMsg = "Tonight I'm going to bed WOOO"}   
  return <h1>{outputMsg}</h1>;
  }
}

ReactDOM.render(<TonightsPlan/>, document.getElementById('app'));

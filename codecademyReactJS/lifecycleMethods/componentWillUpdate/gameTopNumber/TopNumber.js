

//He said therefore, "A certain nobleman went into a far country to receive for himself a kingdom, and to return.(Luke 19:12)


import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }
  
  componentWillUpdate(nextProps, nextState){
    if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
}
  }

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

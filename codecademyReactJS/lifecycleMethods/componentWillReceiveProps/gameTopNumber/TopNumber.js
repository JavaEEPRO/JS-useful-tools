

//And he cried, saying, Jesus, thou Son of David, have mercy on me.(Luke 18:38)


import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
	componentWillReceiveProps(nextProps){
    if (nextProps.number > this.state.highest) {
   
      this.props.number = nextProps.number;
      this.state.highest = nextProps.number;
  }
    
  }
  render() {
    return (
      <h1>
        Top Number: {this.props.number}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

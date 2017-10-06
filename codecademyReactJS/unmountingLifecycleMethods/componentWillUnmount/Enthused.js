
//Another came, saying, 'Lord, behold, your mina, which I kept laid away in a handkerchief (Luke 19:20)

import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }
  
  componentWillUnmount(prevProps, prevState) {
  clearInterval(this.interval);
}

  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}

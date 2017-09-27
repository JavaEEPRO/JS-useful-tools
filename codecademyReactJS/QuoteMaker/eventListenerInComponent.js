import React from 'react';
import ReactDOM from 'react-dom';

//He said to the disciples, 
//"The days will come, when you will desire to see one of the days of the Son of Man, and you will not see it.(Luke 17:22)

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick = {this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button/>, document.getElementById('app'));

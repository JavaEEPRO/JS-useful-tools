//A certain ruler asked him, saying, "Good Teacher, what shall I do to inherit eternal life?"(Luke 18:18)


import React from 'react';
import ReactDOM from 'react-dom';
import { colorStyles } from './facebookStyles';

let divStyle = {
  backgroundColor: styles.darkBlue,
  color: styles.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}

ReactDOM.render(
	<Wow />, 
	document.getElementById('app')
);

Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

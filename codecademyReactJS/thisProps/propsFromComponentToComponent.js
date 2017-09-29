//It will be the same way in the day that the Son of Man is revealed. (Luke 17:30)

------------------------------------------------------------Greeting.js---------------------------------------------------------
import React from 'react';


export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}
---------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------App.js--------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting';                      //app imports and renders greeting

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        	<Greeting name = "forgive me please"/>
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
---------------------------------------------------------------------------------------------------------------------------------

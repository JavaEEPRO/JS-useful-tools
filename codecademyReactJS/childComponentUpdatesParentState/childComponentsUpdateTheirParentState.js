
//	I tell you that he will avenge them speedily. Nevertheless when the Son of man cometh, shall he find faith on the earth?(Luke 18:8)

----------------------------------Step1.js-----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
--------------------------------------------------------------------------------------------------------------------------------
-------------------------------------Step2.js-----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
--------------------------------------------------------------------------------------------------------------------------------
-------------------------------------Step3.js-----------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
--------------------------------------------------------------------------------------------------------------------------------
CHILD COMPONENTS UPDATE THEIR PARENTS' STATE
Child Components Update Their Parents' state
In the last lesson, you passed information from a stateful, parent component to a stateless, child component.

In this lesson, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

Here's how that works:

1

The parent component class defines a method that calls this.setState().

For an example, look in Step1.js at the .handleClick() method.

2

The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

For an example, look in Step2.js at the end of the constructor() method.

3

Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

Look in Step2.js, at the prop on line 28.

4

The child receives the passed-down function, and uses it as an event handler.

Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent's state.

Click through the three files in order, and try to follow their chronology. Whenever you're ready, click Next and we'll build an example!

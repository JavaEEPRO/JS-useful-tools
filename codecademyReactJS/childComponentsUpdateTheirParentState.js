
//	I tell you that he will avenge them speedily. Nevertheless when the Son of man cometh, shall he find faith on the earth?(Luke 18:8)

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

CHILD COMPONENTS UPDATE THEIR PARENTS' STATE
Child Components Update Their Parents' state
In the last lesson, you passed information from a stateful, parent component to a stateless, child component.

In this lesson, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

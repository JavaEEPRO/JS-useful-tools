

//The Pharisee stood and prayed to himself like this: 
//'God, I thank you, that I am not like the rest of men, extortioners, unrighteous, adulterers, or even like this tax collector.(Luke 18:11)

--------------------------------------------------------Parent.js----------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
});

---------------------------------------------------------------------------------------------------------------------------------------


---------------------------------------------------------Child.js----------------------------------------------------------------------
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
---------------------------------------------------------------------------------------------------------------------------------------


----------------------------------------------------------Sibling.js-------------------------------------------------------------------
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
---------------------------------------------------------------------------------------------------------------------------------------


CHILD COMPONENTS UPDATE THEIR SIBLINGS' PROPS
Stateless Components Inherit From Stateful Components Recap
You just executed your first complete React programming pattern!

Let's review. Follow each step in the code editor:

A stateful component class defines a function that calls this.setState. (Parent.js, lines 15-19)
The stateful component passes that function down to a stateless component. (Parent.js, line 24)
That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js, lines 10-13)
The stateless component class uses this new function as an event handler. (Child.js, line 20)
When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)
The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js, line 25)
That stateless component class receives the state and displays it. (Sibling.js, lines 5-10)
An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the (Parent.js, lines 23-26)
This pattern occurs in React all the time! The more that you see it, the more that its elegance will become clear.

Being introduced to this pattern is your first step towards understanding how React apps fit together! You'll get more practice using it throughout this course, as well as in the course after this one.

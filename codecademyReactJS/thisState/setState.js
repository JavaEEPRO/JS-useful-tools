//He also spoke a parable to them that they must always pray, and not give up(Luke 18:1)

import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />

THIS.STATE
Update state with this.setstate
A component can do more than just read its own state. A component can also change its own state.

A component changes its state by calling the function this.setState().

this.setState() takes two arguments: an object that will update the component's state, and a callback. You basically never need the callback.

In the code editor, take a look at Example.js. Notice that <Example /> has a state of:

{
  mood:   'great',
  hungry: false
}
Now, let's say that <Example /> were to call:

this.setState({ hungry: true });
After that call, here is what <Example />'s state would be:

{
  mood:   'great',
  hungry: true
}
The mood part of the state remains unaffected!

this.setState() takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

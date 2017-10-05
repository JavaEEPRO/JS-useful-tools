

//And Jesus entered and passed through Jericho (Luke 19:1)

import React from 'react';

export class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = { subtext: 'Put me in an <h2> please.' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ((this.props.text == nextProps.text) && 
      (this.state.subtext == nextState.subtext)) {
      alert("Props and state haven't changed, so I'm not gonna update!");
      return false;
    } else {
      alert("Okay fine I will update.")
      return true;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>{this.state.subtext}</h2>
      </div>
    );
  }
}


UPDATING/UNMOUNTING LIFECYCLE METHODS
shouldComponentUpdate
The second updating lifecycle method is called shouldComponentUpdate.

When a component updates, shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

Look at Example.js in the code editor. Read it through and try to figure out how shouldComponentUpdate works.

shouldComponentUpdate should return either true or false.

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.

shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do. See how Example.js does this on lines 10-19.
1.
Select Target.js and look at the Target component class.

A <Target /> renders a number in a random location. In this game, a "target" is a number that you try to click on.

Whenever a new target appears, they all rerender. This is a problem!

When a target renders, it picks a random location. When a target rerenders, it picks a new random location! This is why the numbers move in such a jerky way: whenever a new one appears, all of the old ones move to a new random place.

When a new target appears, you want all of the old targets to stay where they are! This will make the gameplay much nicer.

You can use shouldComponentUpdate to make Target only rerender when it actually needs to.

Give Target a new method named shouldComponentUpdate which takes two parameters: nextProps and nextState.
2.
You want shouldComponentUpdate to return true when a target first appears. This will cause Target to update as usual.

You want shouldComponentUpdate to return false when a target has already rendered, and is about to repeat the same number as its last render. This will cause Target to cancel its update.

Inside the body of the shouldComponentUpdate function, write the following code:

return this.props.number != nextProps.number;




//As they heard these things, he went on and told a parable, because he was near Jerusalem,
//and they supposed that the Kingdom of God would be revealed immediately.(Luke 19:11)


import React from 'react';

export class Example extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    alert('Component is about to update!  Any second now!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}


UPDATING/UNMOUNTING LIFECYCLE METHODS
componentWillUpdate
The third updating lifecycle method is componentWillUpdate.

componentWillUpdate gets called in between shouldComponentUpdate and render.

componentWillUpdate receives two arguments: nextProps and nextState. Read Example in the code editor to see it in action.

You cannot call this.setState from the body of componentWillUpdate! Which begs the question, why would you use it?

The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

If that sounds abstract, that's okay! All of the lifecycle methods might feel a bit theoretical, until you've used them in real-life scenarios. You'll be doing more of that in the next course.
1.
Let's use componentWillMount to make the screen's background turn yellow if your top number breaks 950,000.

You will use this expression to change the screen's background:

document.body.style.background = (new color goes here);
componentWillUpdate is a good place for setup code like this, that engages with the non-React world. document.body has nothing to do with React at all.

Open TopNumber.js.

Give TopNumber a new method named componentWillUpdate which takes two parameters: nextProps and nextState.
2.
On every render, you want componentWillUpdate to check whether the background is yellow already. If it isn't, then you want to check whether the top number is at least 950,000. If it is, then make the background yellow.

Add the following code to the body of componentWillUpdate:

if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
}
Make sure not to put yellow in quotes! You are referencing the variable defined on line 3.

Of course, you'll also need to change the color back to white when a user starts a new game! You can do this with the help of this.props.game, a boolean that reports whether or not a current game is in progress.

Expand your if statement into an else/if:

if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
  document.body.style.background = yellow;
} else if (!this.props.game 
  && nextProps.game) {
  document.body.style.background = 'white';
}
Click Run and the let the browser refresh. See if you can get the yellow background.



//He said therefore, "A certain nobleman went into a far country to receive for himself a kingdom, and to return. (Luke 19:12)

import React from 'react';

export class Example extends React.component {
  componentDidUpdate(prevProps, prevState) {
    alert('Component is done rendering!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

UPDATING/UNMOUNTING LIFECYCLE METHODS
componentDidUpdate
The last updating lifecycle method is componentDidUpdate.

When a component instance updates, componentDidUpdate gets called after any rendered HTML has finished loading.

Look at Example for an an example of componentDidUpdate.

componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component's props and state before the current updating period began. You can compare them to the current props and state.

componentDidUpdate is usually used for interacting with things outside of the React environment, like the browser or APIs. It's similar to componentWillUpdate in that way, except that it gets called after render instead of before.
1.
In the code editor, select App.js.

We can finally add the most important fix: making the game end!

You can see on lines 60-70 that there is already an endGame method set up that will cause the game to stop. You just have to decide when to call it.

You want the game to end when a user clicks a number less than their previous click. componentDidUpdate can do that!

Look at App's constructor. You can see that App has a this.state.latestClick property. this.state.latestClick stores the value of the most recently clicked number.

This is the value that you need! You're trying to compare the most recent click with the second-to-most-recent click.

Give App a method called componentDidUpdate which takes two parameters: prevProps and prevState.

Set body of this method to the following:

if (this.state.latestClick < prevState.latestClick) {
  this.endGame();
}
Click Run and play a new game. So much better!

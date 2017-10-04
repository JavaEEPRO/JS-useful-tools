

//And hearing the multitude pass by, he asked what it meant.(Luke 18:36)

----------------------------------Example.js-----------------------------------------------------------------------
import React from 'react';

export class Example extends React.Component {
  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
    	+ "I'm about to get:  " + nextProps.text);
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
	<Example text="Hello world" />,
	document.getElementById('app')
);

// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
	ReactDOM.render(
		<Example text="Hello world" />,
		document.getElementById('app')
	);
}, 1000);

-------------------------------------------------------------------------------------------------------------------
-----------------------------------------TopNumber.js--------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }
	componentWillReceiveProps(nextProps){
    if (nextProps.number > this.state.highest) {
   
      this.props.number = nextProps.number;
      this.state.highest = nextProps.number;
  }
    
  }
  render() {
    return (
      <h1>
        Top Number: {this.props.number}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};

-------------------------------------------------------------------------------------------------------------------


UPDATING/UNMOUNTING LIFECYCLE METHODS
componentWillReceiveProps
The first updating lifecycle method is called componentWillReceiveProps.

When a component instance updates, componentWillReceiveProps gets called before the rendering begins.

As one might expect, componentWillReceiveProps only gets called if the component will receive props:

// componentWillReceiveProps will get called here:
ReactDOM.render(
  <Example prop="myVal" />,
  document.getElementById('app')
);

// componentWillReceiveProps will NOT get called here:
ReactDOM.render(
  <Example />,
  document.getElementById('app')
);
Look in the code editor for an example of componentWillReceiveProps. Read it through and try to figure out how it works.

componentWillReceiveProps automatically gets passed one argument: an object called nextProps. nextProps is a preview of the upcoming props object that the component is about to receive.

On line 6, nextProps.text will evaluate to "Hello world".
1.
Select App.js. Click Run. You'll see a game load in the browser.

The goal of this game is to click on high numbers. Every click has to be a higher number than the previous click.

The game has some problems. The numbers move around in a jerky way. "Top Number" is broken. Worst of all, the game never ends!

We'll use lifecycle methods to fix these problems.

Start a new game. When you're done, click the refresh button in the top left of the browser column to make the game stop.
2.
"Top Number" is supposed to show the highest number that you've clicked so far.

It isn't working! No matter what number you click, "Top Number" thinks that that number is the highest number so far.

Select TopNumber.js. Take a look at the TopNumber component class.

In between constructor and render, give TopNumber a new method named componentWillReceiveProps.

Give componentWillReceiveProps a parameter of nextProps.
3.
Look at TopNumber's render function. The problem lies in between the <h1></h1> tags.

Whenever you click on a number in the browser, that number gets passed from App, to TopNumber, as this.props.number. In between the <h1></h1> tags, you can see that TopNumber displays every this.props.number that it gets.

When TopNumber gets a new this.props.number, you don't always want it displayed! You want to check whether that number is, in fact, the highest number yet. If it is the highest, only then should it get displayed in the <h1></h1>.

componentWillReceiveProps can help!

Whenever you get a new this.props.number, componentWillReceiveProps sees it before render does. componentWillReceiveProps can scan this new this.props.number, and decide whether it should be displayed.

Here's a starting point:

componentWillReceiveProps: function (nextProps) {
  if (nextProps.number > this.state.highest) {
    // nextProps.number is the new highest number so far!
    // Display it!
  }
},
4.
Look at at the constructor. this.state.highest starts equal to 0... and never changes! It will always be 0.

You need this.state.highest to live up to its name and keep track of the highest number so far.

In componentWillReceiveProps, remove these lines:

// nextProps.number is the new highest number so far!
// Display it!
In their place, update this.state.highest:

this.setState({
  highest: nextProps.number
});
5.
Good! Now whenever TopNumber gets a new this.props.number, componentWillReceiveProps will use it to keep track of the highest number so far.

All that remains is to display the results!

In TopNumber's render function, replace {this.props.number} with {this.state.highest}.
6.
Try playing another round. It's still definitely broken, but Top Number should work now!

This is a common use of componentWillReceiveProps: comparing incoming props to current props or state, and deciding what to render based on that comparison.

If you are already comfortable with React, then you may have caught a detail about this example that is considered bad form. this.state.highest is derived from props. That means that we use information from props to set the value of information stored in state. We'll go into this more in the next course!

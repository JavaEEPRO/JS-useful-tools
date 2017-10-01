

//I fast twice a week. I give tithes of all that I get.'(Luke 18:12)

import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);

STYLE
Inline Styles
There are many different ways to use styles in React. This lesson is focused on one of them: inline styles.

An inline style is a style that's written as an attribute, like this:

<h1 style={{ color: 'red' }}>Hello world</h1>
Notice the double curly braces. What are those for?

The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."

The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

{ color: 'red' }
If you inject an object literal into JSX, and your entire injection is only that object literal, then you will end up with double curly braces. There's nothing unusual about how they work, but they look funny and can be confusing.
1.
Click Run to see the <h1></h1> rendered to the browser. How can you add styles to this poor <h1></h1>?
2.
Let's give the <h1></h1> an inline style.

Give the <h1></h1> an attribute with a name of style. The attribute's value should evaluate to this object:

{ background: 'lightblue', color: 'darkred' }

//I tell you, this man went down to his house justified rather than the other; 
//for everyone who exalts himself will be humbled, but he who humbles himself will be exalted."(Luke18:14)

import React from 'react';

export class AttentionGrabber extends React.Component {
	render() {
		return <h1>WELCOME TO MY HOMEPAGE!</h1>;
	}
}

Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

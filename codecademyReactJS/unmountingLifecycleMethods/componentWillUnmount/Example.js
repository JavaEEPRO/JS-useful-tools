
//And he said likewise to him, Be thou also over five cities. (Luke 19:19)

import React from 'react';

export class Example extends React.Component {
  componentWillUnmount() {
    alert('Goodbye world');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}



UPDATING/UNMOUNTING LIFECYCLE METHODS
componentWillUnmount
A component's unmounting period occurs when the component is removed from the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.

You can see an example in Example.js, as usual.
Instructions
1.
You are so sick of having to type exclamation points! You have to hold down the shift key, and then reach up with your pinkie... ugh. The worst.

You've written a program to type your exclamation points for you. Select Enthused.js and take a look at your source code.

On lines 4-8, Enthused contains a componentDidMount method that calls a setInterval function, which adds an exclamation point to some text every 15ms.

Enthused renders a 'Stop!' button. Clicking 'Stop!' will unmount the Enthused component and stop the exclamation points.

Open App.js. App renders an <h1></h1>, a text entry field, and a button. At first, this button says 'Add Enthusiasm!' Clicking on this button will remove it and replace it with an <Enthused /> instance. Clicking on <Enthused />'s "Stop!" button will remove <Enthused /> and replace it with the first button.

Click Run. Let the browser refresh.

If this is your first time through this checkpoint, then try entering some text. Click on the button for auto-enthusiasm.
2.
AAAAAH! The Stop button doesn't work! Too much enthusiasm forever!!!!

Hit cmd-R to refresh the page.
3.
Select Enthused.js.

Give Enthused a new componentWillUnmount method, that will stop the madness whenever Enthused is unmounted:

componentWillUnmount(prevProps, prevState) {
  clearInterval(this.interval);
}
4.
Try entering some text, and then adding some more enthusiasm. This time the Stop button should work!

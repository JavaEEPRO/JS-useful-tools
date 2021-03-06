
//And Jesus said unto him, Why callest thou me good? none is good, save one, that is, God.(Luke 18:19)


// facebook color palette

const blue = 'rgb(139, 157, 195)';
const darkBlue = 'rgb(059, 089, 152)';
const lightBlue = 'rgb(223, 227, 238)';
const grey = 'rgb(247, 247, 247)';
const white = 'rgb(255, 255, 255)';

const colorStyles = {
  blue: blue,
  darkBlue: darkBlue,
  lightBlue: lightBlue,
  grey: grey,
  white: white
};

Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.
1.
You have a meeting in 5 minutes with an important client. It is crucial that you impress them by showing off a beautiful React website.

You haven't used any styles at all yet! Oh, no!!!

You do have some styles that you wrote one night while lost in a deep dream. Open styles.js to see your subconscious styles.

Intriguing! But your dream-styles aren't connected to the rest of your app, so at the moment they're worthless. Can you apply your styles before it's too late?

Click Run to see the current state of things. Maybe you don't need to apply your dream-styles! Maybe your site is impressive enough already!
2.
No, definitely not impressive enough.

You need to export your styles from styles.js, so that you can import them into your other files.

In styles.js, export your styles:

export const styles = {
  fontFamily: fontFamily,
  background: background,
  fontSize:   fontSize,
  padding:    padding,
  color:      color
};
3.
These styles are all you've got! You're going to have to use them in both Home.js and AttentionGrabber.js.

In Home.js, create a new line after import { AttentionGrabber } from './AttentionGrabber';. On your new line, import styles from styles.js.

styles.js, Home.js, and AttentionGrabber.js all share the same parent directory.
4.
Now select AttentionGrabber.js.

Create a new line after import React from 'react';. On your new line, import your exported styles variable again.
5.
Now you can use your dream-styles!

Select Home.js. In between the styles import and the Home component declaration, define a new variable:

const divStyle = {
  background: styles.background,
  height:     '100%' 
};
Now select AttentionGrabber.js. In between the styles import and the AttentionGrabber component declaration, define a different new variable:

const h1Style = {
  color:      styles.color,
  fontSize:   styles.fontSize,
  fontFamily: styles.fontFamily,
  padding:    styles.padding,
  margin:     0
};
6.
The client is walking into the conference room! Quick, use those styles!

In Home's render function, give the <div> a style attribute of {divStyle}.
7.
In AttentionGrabber's render function, give the <h1> a style attribute of {h1Style}.

Click Run and expand the browser.

The client falls to pieces over your minimalist, elegant design! Raises for everyone!

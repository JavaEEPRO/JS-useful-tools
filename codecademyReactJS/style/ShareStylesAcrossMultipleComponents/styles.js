//I tell you, this man went down to his house justified rather than the other; 
//for everyone who exalts himself will be humbled, but he who humbles himself will be exalted."(Luke 18:14)

const fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive';
const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
const fontSize = '4em';
const padding = '45px 0';
const color = 'green';

Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

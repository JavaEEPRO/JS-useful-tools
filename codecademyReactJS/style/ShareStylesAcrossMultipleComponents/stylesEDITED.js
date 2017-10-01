
//They were also bringing their babies to him, that he might touch them. But when the disciples saw it, they rebuked them.(Luke 18:15)

export const styles = {
fontFamily: fontFamily = 'Comic Sans MS, Lucida Handwriting, cursive',
background: background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed',
fontSize: fontSize = '4em',
padding: padding = '45px 0',
color: color = 'green'
};


Share Styles Across Multiple Components
What if you want to reuse styles for several different components?

One way to make styles reusable is to keep them in a separate JavaScript file. This file should export the styles that you want to reuse, via export. You can then import your styles into any component that wants them.

In the code editor, move back and forth between facebookStyles.js and FacebookColorThief.js to see a styles file in action.

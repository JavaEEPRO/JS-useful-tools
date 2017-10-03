

//They will scourge and kill him. On the third day, he will rise again."(Luke 18:33)

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount(){
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
  render() {
    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);


setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);


MOUNTING LIFECYCLE METHODS
componentWillMount
The first mounting lifecycle method is called componentWillMount.

When a component renders for the first time, componentWillMount gets called right before render.

Look at Example.js, and follow these steps:

On lines 14-17, <Example /> is rendered for the first time. <Example />'s mounting period begins.
<Example /> calls the first mounting lifecycle method, componentWillMount.
componentWillMount executes, and an alert appears on the screen. (lines 5-7)
After componentWillMount has finished, <Example /> calls the second mounting lifecycle method: render.
<h1>Hello world</h1> appears on the screen (lines 9-11)
Two seconds later, <Example /> renders again (lines 20-22). componentWillMount does NOT get called, because mounting lifecycle events only execute the first time that a component renders.
You can call this.setState from within componentWillMount!

Look at Example2.js for an example of this.setState inside of componentWillMount. See if you can follow how <Example2 /> would render <h1>Hello world</h1>.
1.
Select Flashy.js.

Take a look at the Flashy component class. Click Run.

You should see two alerts:

"AND NOW, FOR THE FIRST TIME EVER... FLASHY!!!!".
"Flashy is rendering!"
Oooh, la la!
2.
At the bottom of the file, delete the /* and */ and uncomment the commented-out code.

This time, after <Flashy /> renders, two seconds will pass and then <Flashy /> will render again in a different color.
3.
How utterly embarrassing!

<Flashy /> alerted, "AND NOW, FOR THE FIRST TIME EVER... " both times!

The second rendering was not "the first time ever." Everyone could tell that the second alert was a lie. The show was a bust, and Flashy received scathing reviews.

<Flashy /> needs to alert, "AND NOW, FOR THE FIRST TIME EVER..." only the first time that <Flashy /> renders.

If you need to do something only the first time that a component renders, then it's probably a job for a mounting lifecycle method!

Before the render function, give Flashy a new property named componentWillMount. Set componentWillMount's value equal to a function:

componentWillMount() {}

render() { ...
Now, highlight the alert that should only happen once:

alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
Cut this alert out of the render function, and paste it into the componentWillMount function instead.

Upon clicking Run, you should see "Flashy is rendering!" both times, but "AND NOW, FOR THE FIRST TIME EVER... FLASHY!!!!" only the first time. Phew!

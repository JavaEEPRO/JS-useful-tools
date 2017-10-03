
//It happened, as he came near Jericho, a certain blind man sat by the road, begging.(Luke 18:35)


import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
	componentDidMount(){
     alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
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
componentDidMount
The final mounting lifecycle method is called componentDidMount.

When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading. Look in the code editor for an example of componentDidMount.

componentDidMount gets used a lot!

If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.

If that sounds vague, don't worry. You'll put lifecycle methods into practice in this course's final project, and then more in the next course! Not to mention in the real world...
1.
Take a look at Flashy.js.

Flashy is mostly the same component class from earlier, but it has a brand new alert added to its render function on line 13.

Click Run and watch Flashy flash. You should see three alerts:

"AND NOW, FOR THE FIRST TIME EVER... FLASHY!!!!"
"Flashy is rendering!"
"YOU JUST WITNESSED THE DEBUT OF... FLASHY!!!!!!!"
Thanks to setTimeout, <Flashy /> will render twice, with a two-second pause in between.
2.
How incredibly gauche!

<Flashy /> alerted, "YOU JUST WITNESSED THE DEBUT OF... FLASHY!!!!!!!" both times! The second time was not a debut, and many guests stormed out in a great huff.

You need to alert "YOU JUST WITNESSED THE DEBUT OF... FLASHY!!!!!!!" only the first time that <Flashy /> renders.

You can't use componentWillMount for this, because you want your alert to happen right after <Flashy /> renders, not before. It would be weird to say, "you just witnessed the debut!" before it happens.

You want something to happen right after the very first rendering... that's exactly what componentDidMount is for!

In between componentWillMount and render, give Flashy an empty componentDidMount method:

componentDidMount() {}

render() { ...
3.
Inside of the render function, highlight the offending alert:

alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
Cut this alert out of the render function, and paste it into the componentDidMount function instead.

Now when you hit Run, you should see the alert "Flashy is rendering!" both times, but the other alerts should appear in the first time only. Crisis averted!

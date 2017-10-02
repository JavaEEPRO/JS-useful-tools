

//But he said, "The things which are impossible with men are possible with God." (Luke18:27)

-------------------------------------------------GuineaPigsContainer.js------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import {GuineaPigs} from '../components/GuineaPigs';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src = {src}/>;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />,
  document.getElementById('app')
);

-----------------------------------------------------------------------------------------------------------------------------


------------------------------------------------------GuineaPigs.js----------------------------------------------------------
import React from 'react';

export class GuineaPigs extends React.Component {
 
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}

-----------------------------------------------------------------------------------------------------------------------------


CONTAINER COMPONENTS FROM PRESENTATIONAL COMPONENTS
Separate Container Components From Presentational Components: Apply
Separating container components from presentational components is a popular React programming pattern.

Here's the basic idea behind it: if a component has to have state, make calculations based on props, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render another component. It should be that component's job to render HTML-like JSX.

Following this pattern separates your business logic from your presentational logic, which is a Good Thing.
1.
GuineaPigs.js contains a lot of logic! You can't even see the render function unless you scroll down.

It makes sense that GuineaPigs would have so much work to do. It has to select the correct guinea pig to render, wait the right amount of time before rendering, render an image, select the next correct guinea pig, and so on.

Let's divide GuineaPigs in a presentational component and a container component. Near the top left of the code editor, click on the folder icon.

Create a new folder named containers. containers should be next to components.

Inside of containers, create a new file named GuineaPigsContainer.js. Make sure that GuineaPigs is plural, but Container is singular!

Once you have made containers/GuineaPigsContainer.js, click Run.
2.
Good!

Open components/GuineaPigs.js.

You want to separate this component class into two: one component for rendering, and one for logic. How do you do that?

To start, just make a copy. After that, you can delete the appropriate parts from each copy.

Highlight the entire contents of components/GuineaPigs.js, and copy it to the clipboard (cmd-A/cmd-C for Mac, ctrl-A/ctrl-C for Windows).

Now, open containers/GuineaPigsContainer.js. Click inside the empty file, and paste. containers/GuineaPigsContainer.js and components/GuineaPigs.js should be identical.
3.
Select components/GuineaPigs.js, and then close the file browser.

Look at the GuineaPigs component class, starting on line 11. This is going to be your presentational component class. That means that its only job will be to render HTML-like JSX.

On line 2, delete import ReactDOM from 'react-dom'.

At the bottom of the file, delete the ReactDOM.render() call.

Export GuineaPigs by adding the keyword export to the beginning of class GuineaPigs.
4.
Good! But why did you just do that?

Because a presentational component will always get rendered by a container component.

GuineaPigs will get rendered by GuineaPigsContainer. Any component that gets rendered by a different component should use export.

Select containers/GuineaPigsContainer.js.

Make a new line after line 2. On your new line, import GuineaPigs.

This will be slightly different from what you've done before! As you saw when you opened the file navigator, GuineaPigs.js and GuineaPigsContainer.js are not neighbors. The filepath that you pass to import will have to navigate up one level, and then down into the components folder.
5.
Select containers/GuineaPigsContainer.js.

Look at the GuineaPigs component class, starting on line 12. This is going to be your container component class.

On line 12, change the component class's name from GuineaPigs to GuineaPigsContainer.

In the ReactDOM.render call near the bottom of the file, change <GuineaPigs /> to <GuineaPigsContainer />.
6.
GuineaPigsContainer contains a lot of logic. It shouldn't also have to render HTML-like JSX.

Delete any HTML-like JSX from GuineaPigsContainer's render function's return statement. Instead, return an instance of GuineaPigs. The new render function should look like this:

render() {
  const src = GUINEAPATHS[this.state.currentGP];
  return <GuineaPigs />;
}
7.
Once your container component has chosen a guinea pig, it must pass that guinea pig to the presentational component.

In GuineaPigsContainer's render function, pass the chosen guinea pig by giving <GuineaPigs /> a prop of src={src}.
8.
Select components/GuineaPigs.js.

This component is supposed to be the opposite of GuineaPigsContainer. Its only job is to render HTML-like JSX.

Delete everything inside of the GuineaPigs component class, except for the render function. When you're done, the object passed to React.component should only have one property: render!

Inside of the render function, delete this line of logic:

const src = GUINEAPATHS[this.state.currentGP];
... and replace it with this:

const src = this.props.src;
Lastly, delete the GUINEAPATHS array.
9.
That should do it!

You divided GuineaPigs into two separate component classes: GuineaPigs and GuineaPigsContainer.

In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

You can find a lot of intelligent articles written about this pattern. Here's a nice one to start with.

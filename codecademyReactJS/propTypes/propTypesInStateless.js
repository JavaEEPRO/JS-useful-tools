

//Peter said, "Look, we have left everything, and followed you."(Luke 18:28)

---------------------------------------------GuineaPigs.js-----------------------------------------------------------------------------
import React from 'react';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}

GuineaPigs.propTypes = {
  src: React.PropTypes.string.isRequired
};
---------------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------GuineaPigsContainer.js-----------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from '../components/GuineaPigs';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };
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
    return <GuineaPigs src={src} />;
  }
});

ReactDOM.render(
  <GuineaPigsContainer />, 
  document.getElementById('app')
);
---------------------------------------------------------------------------------------------------------------------------------------

PROPTYPES
PropTypes in Stateless Functional Components
Remember stateless functional components? You can see some familiar ones in Example.js.

How could you write propTypes for a stateless functional component?

// Usual way:
class Example extends React.component{
}
Example.propTypes = {

};
...

// Stateless functional component way:
const Example = (props) => {
  // ummm ??????
It turns out the process if fairly similar. To write propTypes for a stateless functional component, you define a propTypes object as a property of the stateless functional component itself. Here's what that looks like:

const Example = (props) => {
  return <h1>{props.message}</h1>;
}

Example.propTypes = {
  message: React.PropTypes.string.isRequired
};
1.
Select GuineaPigs.js.

You can see your GuineaPigs stateless functional component from earlier. Let's give it a propType.

After the GuineaPigs class declaration, define a propTypes property on GuineaPigs. Use the example code above as a guide.

GuineaPigs is only expecting one prop, so it should only get one propType.

Give GuineaPigs one propType, matching its expected prop. Make the propType isRequired.

If you aren't sure what prop GuineaPigs is expecting, check the render function in GuineaPigsContainer.js.

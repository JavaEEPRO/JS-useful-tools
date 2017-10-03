

//But he said, "The things which are impossible with men are possible with God."(Luke 18:27)

import React from 'react';
import ReactDOM from 'react-dom';

export const Friend = () => {
	return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' />;
	}
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);

STATELESS FUNCTIONAL COMPONENTS
Stateless Functional Components
In the code editor, take a look at GuineaPigs from the last lesson.

Notice that its instructions object only has one property: render().

When you separate a container component from a presentational component, the presentational component will always end up like this: one render() function, and no other properties.

If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.Component, you can write it as JavaScript function!

A component class written as a function is called a stateless functional component. Stateless functional components have some advantages over typical component classes. We'll cover those advantages in this lesson.

Click on Example.js to see a stateless functional component in action.
1.
Select Friend.js.

Rewrite the Friend component class as a stateless functional component.

Use Example.js as a guide. Make sure to delete the original Friend component class when you're done.

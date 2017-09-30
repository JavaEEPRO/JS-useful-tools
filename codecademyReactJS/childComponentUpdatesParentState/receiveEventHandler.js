
//Two men went up into the temple to pray; one was a Pharisee, and the other was a tax collector(Luke 18:10)

--------------------------------------------------Parent.js---------------------------------------------------------------------
class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
--------------------------------------------------------------------------------------------------------------------------------

--------------------------------------------------Child.js----------------------------------------------------------------------
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
--------------------------------------------------------------------------------------------------------------------------------


CHILD COMPONENTS UPDATE THEIR PARENTS' STATE
Receive the Event Handler
You just passed a function down to Child that can change Parent's state!
1.
Select Child.js.

If a user selects a new name from the dropdown menu, then you want Child to call changeName. changeName will change the parent's this.state.name, which will change the name displayed in the <h1></h1>.

Inside of Child's render function, give <select> a new attribute.

Make the attribute's name onChange. This will create an event listener.

Make the attribute's value equal to the function that you passed in from Parent.js. If you can't remember what prop name you used, then check Parent's render function.
2.
Try selecting a new name from the dropdown menu.

It doesn't work! Why not? Take another look at this.props.onChange:

changeName(newName) {
  this.setState({
    name: newName
  });
}
This function needs to be passed a new name as an argument, in order to work properly.

When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! Instead of passing a new name, it will pass an event object, as all event listeners do.

This is a common problem when passing down an event handler in React! The solution is to define another function.

This new function should take an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name! It sounds like a lot, but you will see this happen so often that it will soon feel intuitive.

In Child.js, before the render function, define a new function that can be passed an event object:

handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}

render() { ...
3.
You've defined a new function that can take an event object, and use it to correctly update the parent's state. Now let's put that new function to use!

As with all methods that we pass in React, we must first bind this to our new method to the current instance of Child.

Add the following boilerplate constructor to your Child class:

constructor(props) {
  super(props);
}
Then at the end of your constructor bind .handleChange() to the current value of this.
4.
In Child's render function, change the event handler from {this.props.onChange}, to {this.handleChange}.

Click Run, and try selecting some different names from the dropdown menu. It should work!



//And he said, The things which are impossible with men are possible with God.(Luke 18:27)

----------------------------------------------------BestSeller.js-----------------------------------------------------------
import React from 'react';

export class BestSeller extends React.Component {
  render() {
    return (
      <li>
        Title: <span>
          {this.props.title}
        </span><br />
        
        Author: <span>
          {this.props.author}
        </span><br />
        
        Weeks: <span>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}
BestSeller.propTypes = {
  title: React.PropTypes.string.isRequired,
  author:React.PropTypes.string.isRequired,
  weeksOnList:React.PropTypes.number.isRequired
}
----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------BookList.js-------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import { BestSeller } from './BestSeller';

export class BookList extends React.Component {
  render() {
    return (
      <div>
        <h1>Best Sellers</h1>
        <div>
          <ol>
            <BestSeller 
              title="Glory and War Stuff for Dads" 
              author="Sir Eldrich Van Hoorsgaard" 
              weeksOnList={10} />
            <BestSeller 
              title="The Crime Criminals!" 
              author="Brenda Sqrentun" 
              weeksOnList={2} />
            <BestSeller
              title="Subprime Lending For Punk Rockers" 
              author="Malcolm McLaren" 
              weeksOnList={600} />
          </ol>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<BookList/>,document.getElementById('app'));
----------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------Runner.js------------------------------------------------------------------
import React from 'react';

export class Runner extends React.Component {
  render() {
  	let miles = this.props.miles;
    let km = this.props.milesToKM(miles);
    let races = this.props.races.map(function(race, i){
      return <li key={race + i}>{race}</li>;
    });

    return (
      <div style={this.props.style}>
        <h1>{this.props.message}</h1>
        { this.props.isMetric && 
          <h2>One Time I Ran {km} Kilometers!</h2> }
        { !this.props.isMetric && 
          <h2>One Time I Ran {miles} Miles!</h2> }
        <h3>Races I've Run</h3>
        <ul id="races">{races}</ul>
      </div>
    );
  }
}

Runner.propTypes = {
  message:   React.PropTypes.string.isRequired,
  style:     React.PropTypes.object.isRequired,
  isMetric:  React.PropTypes.bool.isRequired,
  miles:     React.PropTypes.number.isRequired,
  milesToKM: React.PropTypes.func.isRequired,
  races:     React.PropTypes.array.isRequired
};
----------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------MessageDisplayer.js-------------------------------------------------------
import React from 'react';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};
----------------------------------------------------------------------------------------------------------------------------

PROPTYPES
Add Properties to PropTypes
In the code editor, look at the property on MessageDisplayer's propTypes object:

message: React.PropTypes.string
What are the properties on propTypes supposed to be, exactly?

The name of each property in propTypes should be the name of an expected prop. In our case, MessageDisplayer expects a prop named message, so our property's name is message.

The value of each property in propTypes should fit this pattern:

React.PropTypes.expected-data-type-goes-here
Since message is presumably going to be a string, we chose React.PropTypes.string. You can see this on line 12. Notice the difference in capitalization between the propTypes object and React.PropTypes!

Each property on the propTypes object is called a propType.

Select the next file in code editor, Runner.js. Find Runner's propTypes object.

Runner has six propTypes! Look at each one. Note that bool and func are abbreviated, but all other datatypes are spelled normally.

If you add .isRequired to a propType, then you will get a console warning if that prop isn't sent.

Try to find all six props from the propTypes object in Runner's render function: this.props.message, this.props.style, etc.
1.
Select BestSeller.js.

In BestSeller's propTypes object, write one propType for each prop that BestSeller is expecting: title, author, and weeksOnList.

Make title and author strings. Make weeksOnList a number. Make all three isRequired.

If you get stuck, look to Runner.js for guidance.
2.
Good! You just gave BestSeller three propTypes.

In the code editor, open the last file, BookList.js.

At the bottom of the file, render <BookList /> using ReactDOM.render.

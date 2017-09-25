import React from 'react';
import ReactDOM from 'react-dom';

//And they lifted up their voices, and said, Jesus, Master, have mercy on us.(Luke 17:13)

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
<li key = {'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

//And when he saw them, he said unto them, Go shew yourselves unto the priests.
//And it came to pass, that, as they went, they were cleansed. (Luke 17:14)

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      { !judgmental && <li>Sushi Burrito</li>}
      { !judgmental && <li>Rhubarb Pie</li>}
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      { !judgmental && <li>Broiled Grapefruit</li>}
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

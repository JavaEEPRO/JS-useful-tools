//for as the lightning, when it flashes out of the one part under the sky, shines to the other part under the sky; 
//so will the Son of Man be in his day. (Luke 17:24)

//----------------------------------ProfilePage.js----------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
				<NavBar/>	
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
//-----------------------------------------------------------------------------------------

//-----------------------------------NavBar.js---------------------------------------------
import React from 'react';

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
//-----------------------------------------------------------------------------------------




//And as it was in the days of Noe, so shall it be also in the days of the Son of man.(Luke 17:26)

import React from 'react';

export class NavBar extends React.Component {                                               //this export we going for
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

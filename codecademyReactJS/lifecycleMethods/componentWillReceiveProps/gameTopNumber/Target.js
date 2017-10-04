
//Saying, What wilt thou that I shall do unto thee? And he said, Lord, that I may receive my sight (Luke 18:41)


import React from 'react';
import { random } from './helpers';

export class Target extends React.Component {
  render() {
    let visibility = this.props.number ? 'visible' : 'hidden';
    let style = {
      position: 'absolute',
      left: random(0, 100) + '%',
      top: random(0, 100) + '%',
      fontSize: 40,
      cursor: 'pointer',
      visibility: visibility
    };

    return (
      <span style={style} className="target">
        {this.props.number}
      </span>
    )
  }
}

Target.propTypes = {
  number: React.PropTypes.number.isRequired
};

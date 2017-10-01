
//They were also bringing their babies to him, that he might touch them. But when the disciples saw it, they rebuked them.(Luke 18:15)

import React from 'react';
import ReactDOM from 'react-dom';
import { AttentionGrabber } from './AttentionGrabber';
import {styles} from './styles';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

ReactDOM.render(
	<Home />, 
	document.getElementById('app')
);


In Home.js, create a new line after import { AttentionGrabber } from './AttentionGrabber';. On your new line, import styles from styles.js.

styles.js, Home.js, and AttentionGrabber.js all share the same parent directory.


//He ran on ahead, and climbed up into a sycamore tree to see him, for he was to pass that way.(Luke 19:4)


import React from 'react';

const style = {
	fontSize: 110,
	color:    'lightgrey',
	position: 'absolute',
	top: '30%'
};

export const Display = (props) => {
	return (
		<div style={style}>
			{props.number}
		</div>
	);
}

Display.propTypes = {
	number: React.PropTypes.number.isRequired
};

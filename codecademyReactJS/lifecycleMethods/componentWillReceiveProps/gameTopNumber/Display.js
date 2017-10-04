

//And Jesus stood, and commanded him to be brought unto him: and when he was come near, he asked him (Luke 18:40)


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

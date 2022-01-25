
import React from 'react';

const Buttons = ({ buttonArr }) => {
	return (
		buttonArr.map((e, i) => {
			return <button>{e}</button>

		})
	);
};

export default Buttons;
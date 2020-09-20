import React from 'react';
import Webcam from 'react-webcam';

import './CamScreen.scss';

const CamScreen = ({ setCamOpen }) => {
	return (
		<div className="CamScreen">
			<Webcam className="Webcam" />
		</div>
	);
};

export default CamScreen;

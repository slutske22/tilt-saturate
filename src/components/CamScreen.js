import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import Overlay from './Overlay';

import './CamScreen.scss';

const CamScreen = ({ setCamOpen }) => {
	useEffect(() => {
		const deviceOrientationHandler = (e) => {
			const { alpha, beta, gamma } = e;
			console.log(e);
		};

		if (window.DeviceOrientationEvent) {
			window.addEventListener('deviceorientation', deviceOrientationHandler);
		}

		return () => {
			if (window.DeviceOrientationEvent) {
				window.removeEventListener(
					'deviceorientation',
					deviceOrientationHandler
				);
			}
		};
	}, []);

	return (
		<div className="CamScreen">
			<Webcam videoConstraints={{ facingMode: 'user' }} className="Webcam" />
			<Overlay setCamOpen={setCamOpen} />
		</div>
	);
};

export default CamScreen;

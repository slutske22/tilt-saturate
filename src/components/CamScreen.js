import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import Overlay from './Overlay';

import './CamScreen.scss';

const CamScreen = ({ setCamOpen }) => {
	const [orientation, setOrientation] = useState('orientation');

	const deviceOrientationHandler = (e) => {
		const { alpha, beta, gamma } = e;
		console.log({ alpha, beta, gamma });
		setOrientation({ alpha, beta, gamma });
	};

	const attachListener = () => {
		// https://medium.com/flawless-app-stories/how-to-request-device-motion-and-orientation-permission-in-ios-13-74fc9d6cd140
		if (typeof DeviceMotionEvent.requestPermission === 'function') {
			DeviceOrientationEvent.requestPermission()
				.then((response) => {
					if (response === 'granted') {
						window.addEventListener(
							'deviceorientation',
							deviceOrientationHandler
						);
					}
				})
				.catch(console.error);
		}
	};

	useEffect(() => {
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
			<Overlay
				setCamOpen={setCamOpen}
				orientation={orientation}
				attachListener={attachListener}
			/>
		</div>
	);
};

export default CamScreen;

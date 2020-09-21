import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import Overlay from './Overlay';

import './CamScreen.scss';

const CamScreen = ({ setCamOpen }) => {
	const [orientation, setOrientation] = useState('orientation');
	const [simulatorValue, setSimulatorValue] = useState(0)

	const deviceOrientationHandler = (e) => {
		const { alpha, beta, gamma } = e;
		setOrientation({ alpha, beta, gamma });
	};

	const attachListener = () => {
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
				simulatorValue={simulatorValue}
				setSimulatorValue={setSimulatorValue}
			/>
		</div>
	);
};

export default CamScreen;

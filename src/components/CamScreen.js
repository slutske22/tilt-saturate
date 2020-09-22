import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import Overlay from './Overlay';

import './CamScreen.scss';

const CamScreen = ({ setCamOpen }) => {
	const [overlay, setOverlay] = useState('instructions');
	const [orientation, setOrientation] = useState('orientation');
	const [simulatorValue, setSimulatorValue] = useState(0);
	const [filter, setFilter] = useState('saturate(100%)');

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

	useEffect(() => {
		const degrees = simulatorValue * 360;
		const simulatorGamma = degrees > 180 ? -360 + degrees : degrees;
		const gamma =
			overlay === 'simulator' ? simulatorGamma : orientation.gamma;
		const filter =
			gamma < 0
				? `saturate(${100 + gamma}%)`
				: `saturate(${100 + gamma * 2}%)`;
		setFilter(filter);
	}, [orientation, simulatorValue, overlay]);

	return (
		<div className="CamScreen">
			<Webcam
				videoConstraints={{ facingMode: 'user' }}
				className="Webcam"
				style={{ filter }}
			/>
			<Overlay
				setCamOpen={setCamOpen}
				orientation={orientation}
				attachListener={attachListener}
				overlay={overlay}
				setOverlay={setOverlay}
				simulatorValue={simulatorValue}
				setSimulatorValue={setSimulatorValue}
			/>
		</div>
	);
};

export default CamScreen;

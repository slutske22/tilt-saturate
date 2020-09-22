import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiAnticlockwiseRotation, GiClockwiseRotation } from 'react-icons/gi';
import { FiArrowLeftCircle, FiInfo } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';
import Simulator from './Simulator';

import './Overlay.scss';

const Overlay = ({
	setCamOpen,
	orientation,
	attachListener,
	overlay,
	setOverlay,
	simulatorValue,
	setSimulatorValue,
}) => {
	return (
		<div className="Overlay">
			{overlay === 'instructions' && (
				<div className="instructions">
					<h1>Tilt Saturate</h1>
					<div className="icons">
						<GiAnticlockwiseRotation size={44} />
						<FaCameraRetro size={56} />
						<GiClockwiseRotation size={44} />
					</div>
					<p>Tilt your device clockwise to saturate the image.</p>
					<p>Tilt it counterclockwise to desaturate it.</p>
					<button
						className="alternate got-it"
						onClick={() => setOverlay(false)}
					>
						Got it!
					</button>
					<div className="warning">
						Not working? You may need to{' '}
						<button className="understated" onClick={attachListener}>
							give your browser permission
						</button>{' '}
						to use the gyroscope.
					</div>
				</div>
			)}
			{overlay === 'simulator' && (
				<Simulator
					setOverlay={setOverlay}
					simulatorValue={simulatorValue}
					setSimulatorValue={setSimulatorValue}
				/>
			)}
			{!overlay && (
				<div className="menu">
					<div className="top">
						<div
							onClick={() => setOverlay('instructions')}
							className="icon-wrapper"
						>
							<FiInfo size={40} />
                     <pre>{JSON.stringify(orientation, null, 2)}</pre>
						</div>
					</div>
					<div className="bottom">
                  <div
							onClick={() => setCamOpen(false)}
							className="icon-wrapper"
						>
							<FiArrowLeftCircle size={40} />
						</div>
						<div
							onClick={() => setOverlay('simulator')}
							className="icon-wrapper phone-simulator"
						>
							<MdPhoneIphone size={40} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Overlay;

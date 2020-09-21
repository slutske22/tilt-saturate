import React, { useState } from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiAnticlockwiseRotation, GiClockwiseRotation } from 'react-icons/gi';
import { FiArrowLeftCircle, FiInfo } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';
import Simulator from './Simulator'

import './Overlay.scss';

const Overlay = ({ setCamOpen, orientation, attachListener, simulatorValue, setSimulatorValue }) => {
	const [open, setOpen] = useState('instructions');



	return (
		<div className="Overlay">
			{open === 'instructions' && (
				<div className="instructions">
					<h1>Tilt Saturate</h1>
					<h2>A silly app for people</h2>
					<div className="icons">
						<GiAnticlockwiseRotation size={44} />
						<FaCameraRetro size={56} />
						<GiClockwiseRotation size={44} />
					</div>
					<p>Tilt your device clockwise to saturate the image.</p>
					<p>Tilt is counterclockwise to make it greyscale.</p>
					<button className="alternate" onClick={() => setOpen(false)}>
						Got it!
					</button>
					<div className="warning">
						Not working? You may need to{' '}
						<button className="understated" onClick={attachListener}>
							give your iphone permission
						</button>{' '}
						to use its gyroscope.
					</div>
				</div>
			)}
			{open === 'simulator' &&
				<Simulator 
					setOpen={setOpen}
					simulatorValue={simulatorValue}
					setSimulatorValue={setSimulatorValue} />
			}
			{!open && (
				<div className="menu">
					<div className="top">
						<div
							onClick={() => setCamOpen(false)}
							className="icon-wrapper"
						>
							<FiArrowLeftCircle size={40} />
						</div>
						<div onClick={() => setOpen('instructions')} className="icon-wrapper">
							<FiInfo size={40} />
						</div>
					</div>
					<div className="bottom">
						<pre>{JSON.stringify(orientation, null, 2)}</pre>
						<div onClick={() => setOpen('simulator')} className="icon-wrapper phone-simulator">
							<MdPhoneIphone size={40} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Overlay;

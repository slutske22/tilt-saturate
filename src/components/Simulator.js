import React, { useState } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';
import {
	CircularInput,
	CircularTrack,
	CircularThumb,
} from 'react-circular-input';
import './Simulator.scss';

const Simulator = ({ setOverlay, simulatorValue, setSimulatorValue }) => {
	const [value, setValue] = useState(0);

	const setSimValue = (value) => {
		setValue(value);
		setSimulatorValue(value);
	};

	return (
		<div className="Simulator">
			<div className="top">
				<div onClick={() => setOverlay(false)} className="icon-wrapper">
					<FiArrowLeftCircle size={40} />
				</div>
			</div>
			<div className="main-content">
				<h3>
					Not on a mobile device? <br /> Use this tilt simulator:
				</h3>
				<div className="control">
					<CircularInput
						value={simulatorValue || 0}
						onChange={setSimValue}
						className="simulator-control"
					>
						<CircularTrack style={{ stroke: 'white', strokeWidth: 10 }} />
						<CircularThumb style={{ cursor: 'pointer' }} />
					</CircularInput>
					<div
						className="icon-wrapper"
						style={{ transform: `rotate(${value * 360}deg)` }}
					>
						<MdPhoneIphone size={110} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Simulator;

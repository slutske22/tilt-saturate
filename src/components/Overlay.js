import React, { useState } from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import { GiAnticlockwiseRotation, GiClockwiseRotation } from 'react-icons/gi';
import { FiArrowLeftCircle, FiInfo } from 'react-icons/fi';
import { MdPhoneIphone } from 'react-icons/md';

import './Overlay.scss';

const Overlay = ({ setCamOpen }) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="Overlay">
			{open && (
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
				</div>
			)}
			{!open && (
				<div className="menu">
					<div className="top">
						<div
							onClick={() => setCamOpen(false)}
							className="icon-wrapper"
						>
							<FiArrowLeftCircle size={40} />
						</div>
						<div onClick={() => setOpen(true)} className="icon-wrapper">
							<FiInfo size={40} />
						</div>
					</div>
					<div className="bottom">
						<div className="icon-wrapper">
							<MdPhoneIphone size={40} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Overlay;

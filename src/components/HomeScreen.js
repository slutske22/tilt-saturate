import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';
import './HomeScreen.scss';

const HomeScreen = ({ setCamOpen }) => (
	<div className="HomeScreen">
		<h1>Tilt Saturate</h1>
		<FaCameraRetro size={56} />
		<button onClick={() => setCamOpen(true)}>Open Camera</button>
	</div>
);

export default HomeScreen;

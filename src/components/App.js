import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import CamScreen from './CamScreen';

const App = () => {
	const [camOpen, setCamOpen] = useState(false);

	return (
		<div className="App">
			{!camOpen && <HomeScreen setCamOpen={setCamOpen} />}
			{camOpen && <CamScreen setCamOpen={setCamOpen} />}
		</div>
	);
};

export default App;

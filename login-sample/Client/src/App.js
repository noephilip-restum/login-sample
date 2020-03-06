import React from 'react';
import Routes from './routes';
import './App.css';

import { ContextState } from './contexts';

function App() {
	return (
		<ContextState>
			<Routes />
		</ContextState>
	);
}

export default App;

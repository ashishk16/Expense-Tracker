import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';
import {BrowserRouter as Router} from 'react-router-dom';

export default function Root({store}) {
	return (
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};

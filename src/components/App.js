import React from 'react';

import Header from '../containers/Header/Header';
import Content from '../containers/Content/Content';
import {Route, Switch} from 'react-router-dom';
import NewExpense from '../containers/NewExpense/NewExpense';
const styles = require('../styles/app.scss');

const App = () =>
	<div className={'container'}>
		<Header />
		<Switch>
			<Route exact path="/" component={Content}/>
			<Route path="/add" component={NewExpense}/>
		</Switch>
	</div>;

export default App;

import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
	return (
		<div className="header">
			<div className="header-background"/>
			<div className="nav-bar">
				<img className="col-1 logo" src={require('../../images/logo.png')} />
				<Link className="col-1" to="/"> Home</Link>
				<Link className="col-1" to={'/add'}> New Expense</Link>
				<Link className="col-1" to={'/add'}> All Expenses</Link>
				<Link className="col-1" to={'/add'}> About</Link>
			</div>
		</div>
	);
};

export default Header;

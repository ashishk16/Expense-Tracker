import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const Content = () => {
	return (
		<React.Fragment>
		<div className="content">
			<div className="about">
				<div className="about-para-1 col-1">
					Meet Expense Tracker...
				</div>
				<div  className="about-para-2 col-1">
					Easy way to add a expense and track your expenses to manage your money
				</div>
				<Link to={'/add'} className="add-expense col-1"><FontAwesomeIcon icon={faPlusSquare}/> Add New Expense </Link>
			</div>
		</div>
				<div className="about-para-3">
					<div className="col-1">
						<ul>
							<lh>Record your expenses</lh>
							<li>Make entry for each and every expense</li>
							<li>In case of multiple expense of same category you create a report of multiple expenses</li>
						</ul>
					</div>
					<div className="col-1">
						<ul>
							<lh>Track your Investments</lh>
							<li>Compare your expenses with previous months</li>
							<li>Keep track of expense category where you spend a lot</li>
						</ul>
					</div>
				</div>
		</React.Fragment>
	);
};

export default Content;

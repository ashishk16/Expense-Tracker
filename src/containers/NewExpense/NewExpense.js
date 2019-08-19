import React from 'react';

const styles = require('../../styles/app.scss');

const NewExpense = () => {
	return (
		<React.Fragment>
			<form className="newExpense">
				<div>
					Product Type:<br/>
					<select>
						<option value="grocery">Grocery</option>
						<option value="electronics">Electronics</option>
						<option value="recreational">Recreational Activities</option>
						<option value="stationary">Stationary</option>
						<option value="others">Others</option>
					</select>
				</div>
				<div>
					Product Name:<br/>
					<input type="text"/>
				</div>
				<div>
					Amount:<br/>
					<input type="number"/>
				</div>
				<div>
					Spend Date:<br/>
					<input type="date"/>
				</div>
				<div>
					Receipt:<br/>
					<input type="file" name="pic" accept="image/*" />
				</div>
				<div>
					Description:<br/>
					<textarea />
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>

			</form>
		</React.Fragment>
	);
};

export default NewExpense;

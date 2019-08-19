import Content from "./Content";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from "enzyme";
configure({adapter: new Adapter()});

describe('Content component', () => {
	it('should match snapshot', () => {
		const wrapper = shallow(<Content />);
		expect(wrapper).toMatchSnapshot();
	});
});

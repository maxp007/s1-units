import React from 'react';
import Order from './Order';
import {sortTypes} from '../utils/sortOrders';
import {fakeOrders} from '../mock/fakeOrders'
import {shallow, configure} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App component', () => {
    const wrapper = shallow(<Order order={fakeOrders[0]}/>);

    it('render fakeorder[0]', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    const wrapper1 = shallow(<Order order={fakeOrders[1]}/>);

    it('render fakeorder[1]', () => {
        expect(toJson(wrapper1)).toMatchSnapshot();
    });

    const wrapper2 = shallow(<Order order={fakeOrders[2]}/>);

    it('render fakeorder[2]', () => {
        expect(toJson(wrapper2)).toMatchSnapshot();
    });

    const wrapper_ = shallow(<Order order={{}}/>);

    it('render wrapper is empty object', () => {
        expect(toJson(wrapper_)).not.toEqual(toJson(wrapper1));
    });

});
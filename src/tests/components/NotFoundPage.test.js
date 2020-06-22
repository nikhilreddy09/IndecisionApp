import React from "react";
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('not found page to be rendered' , () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})
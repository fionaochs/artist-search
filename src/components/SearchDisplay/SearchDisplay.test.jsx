import React from 'react';
import { shallow } from 'enzyme';
import SearchDisplay from './SearchDisplay';

describe('SearchDisplay component', () => {
  it('renders SearchDisplay', () => {
    const wrapper = shallow(<SearchDisplay name='fefi' onChange={() => {}} onClick={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});

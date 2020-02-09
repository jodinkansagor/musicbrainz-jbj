import React from 'react';
import { shallow } from 'enzyme';
import ArtistInput from './Form';

describe('ArtistInput component', () => {
  it('renders ArtistInput', () => {
    const wrapper = shallow(<ArtistInput onSubmit={()=>{}} onChange={()=>{}} artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

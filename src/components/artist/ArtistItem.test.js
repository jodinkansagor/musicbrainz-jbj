import React from 'react';
import { shallow } from 'enzyme';
import ArtistItem from './ArtistItem';

describe('ArtistItem component', () => {
  it('renders ArtistItem', () => {
    const wrapper = shallow(<ArtistItem artistId="1"  artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

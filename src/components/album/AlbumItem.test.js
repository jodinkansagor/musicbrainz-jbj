import React from 'react';
import { shallow } from 'enzyme';
import AlbumItem from './AlbumItem';

describe('AlbumItem component', () => {
  it('renders AlbumItem', () => {
    const wrapper = shallow(<AlbumItem albumId="1" albumTitle="Title" artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

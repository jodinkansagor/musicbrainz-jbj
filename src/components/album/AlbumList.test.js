import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

describe('AlbumList component', () => {
  it('renders AlbumList', () => {
    const wrapper = shallow(<AlbumList albumArray={[{ albumId: '4', albumTitle: 'title' }]} artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

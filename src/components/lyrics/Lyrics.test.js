import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('renders Lyrics', () => {
    const wrapper = shallow(<Lyrics match={{ albumId: '1', albumTitle: 'title' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

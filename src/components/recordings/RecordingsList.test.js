import React from 'react';
import { shallow } from 'enzyme';
import RecordingsList from './RecordingsList';

describe('RecordingsList component', () => {
  it('renders RecordingsList', () => {
    const wrapper = shallow(<RecordingsList recordingsArray={[]} artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

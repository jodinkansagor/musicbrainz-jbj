import React from 'react';
import { shallow } from 'enzyme';
import RecordingsItem from './RecordingsItem';

describe('RecordingsItem component', () => {
  it('renders RecordingsItem', () => {
    const wrapper = shallow(<RecordingsItem recordingTitle="titel" artistName="name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

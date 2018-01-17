// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import StyleguideContainer from '../index';

test('Home existence', () => {
  const component = renderer.create(<StyleguideContainer />).toJSON();

  // correct home component
  expect(component).toMatchSnapshot();
});

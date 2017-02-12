import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {Restaurants} from './Restaurants';

function setup(propOverrides) {

  let restaurants = [];
  const props = Object.assign({
    restaurants: restaurants,
    searchTerm: ''
  }, propOverrides);

  const renderer = TestUtils.createRenderer();
  renderer.render(<Restaurants {...props}/>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('components', () => {
  describe('Restaurants', () => {
    it('should render container', () => {
      const {output} = setup();
      expect(output.props.className).toBe('restaurants');
    });
  });
});

import React from 'react';
// import { render } from '@testing-library/react';
import { App } from './App';
import { shallow } from 'enzyme';

const mockDispatch = jest.fn();

test('renders learn app correctly if user is authenticated', () => {
  const wrapper = shallow(<App isAuthenticated dispatch={mockDispatch}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders learn app correctly if user is not authenticated', () => {
  const wrapper = shallow(<App isAuthenticated = {false} dispatch={mockDispatch}/>);
  expect(wrapper).toMatchSnapshot();
});

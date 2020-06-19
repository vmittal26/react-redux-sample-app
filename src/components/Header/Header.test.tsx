import { shallow } from 'enzyme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getElementByAttr } from '../../shared';

import { Header } from './Header';


jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({
    push: jest.fn(),
    goBack: jest.fn()
  }))
}));

const getProps = (isAuthenticated = false) => ({
  isAuthenticated,
  onLogout: jest.fn()
});
describe('Header', () => {
  const headerProps = getProps(true);
  const wrapper = shallow(<Header {...headerProps} />);
  const element = getElementByAttr(wrapper, 'logout-icon');

  beforeEach(() => {
    wrapper.setProps(headerProps);
  });
  test('renders learn Header correctly if user is authenticated ', () => {
    expect(element.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders learn Header correctly if user is not authenticated ', () => {
    wrapper.setProps(getProps());
    expect(wrapper).toMatchSnapshot();
  });

  test('button should have correct text', () => {
    const headerButton = getElementByAttr(wrapper, 'home-button');
    expect(headerButton.text()).toBe('Swapi React');
  });

  test('onlogout should be called on click of logout icon', () => {
    element.simulate('click');
    expect(headerProps.onLogout).toHaveBeenCalled();
    // expect(useHistory().push).toHaveBeenCalled();
  });

  // test('On press home should go to login page', () => {
  //   const homeButton = getElementByAttr(wrapper, 'home-button');
  //   homeButton.simulate('click');
  //   expect(useHistory().goBack).toHaveBeenCalled();
  // });
});

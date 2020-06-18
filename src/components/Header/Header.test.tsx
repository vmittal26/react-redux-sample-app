/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Header, HeaderProps } from './Header';

const getProps = (isAuthenticated = false) => ({
  isAuthenticated,
  onLogout: jest.fn()
});

type ShallowWrapperType = ShallowWrapper<
  any,
  Readonly<any>,
  React.Component<HeaderProps, any, any>
>;

describe('Header', () => {
  const headerProps = getProps(true);
  const wrapper: ShallowWrapperType = shallow(<Header {...getProps(true)} />);
  beforeEach(()=>{
    wrapper.setProps(headerProps);
  });
  test('renders learn Header correctly if user is authenticated ', () => {
    expect(wrapper.find("[test-id='logout-icon']").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders learn Header correctly if user is not authenticated ', () => {
    wrapper.setProps(getProps());
    expect(wrapper).toMatchSnapshot();
  });

  test('button should have correct text', () => {
    expect(wrapper.find('button').text()).toBe('Swapi React');
  });

  test('onlogout should be called on click of logout icon', () => {
    wrapper.find("[test-id='logout-icon']").simulate('click');
    expect(headerProps.onLogout).toHaveBeenCalled();
  });
});

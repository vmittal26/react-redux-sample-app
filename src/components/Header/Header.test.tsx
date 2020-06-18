import { shallow } from 'enzyme';
import React from 'react';
import { getElementByAttr } from '../../shared';
import { Header } from './Header';


const getProps = (isAuthenticated = false) => ({
  isAuthenticated,
  onLogout: jest.fn()
});

const mockHistory = {
  history: {
    push: jest.fn()
  }
};

// jest.mock('react-router-dom', ()=>{
//   const reactRouter = jest.requireActual('react-router-dom');
//   return {
//     ...reactRouter,
//     useHistory: jest.fn().mockImplementation(()=>mockHistory)
//   };
// });

describe('Header', () => {
  const headerProps = getProps(true);
  const wrapper = shallow(<Header {...headerProps} />);
  const element = getElementByAttr(wrapper, "[test-id='logout-icon']");
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
    const headerButton = getElementByAttr(wrapper, 'button');
    expect(headerButton.text()).toBe('Swapi React');
  });

  test('onlogout should be called on click of logout icon', () => {
    element.simulate('click');
    expect(headerProps.onLogout).toHaveBeenCalled();
    // expect(mockHistory.history.push).toHaveBeenCalled();
  });
});

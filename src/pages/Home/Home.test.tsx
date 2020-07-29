/* eslint-disable @typescript-eslint/no-explicit-any */
// import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';

jest.mock('../../shared/hooks/useSearchPlanets');


// const mockUseSearchPlanets = useSearchPlanets as jest.Mocked<typeof useSearchPlanets>;


describe('test cases for Home', () => {
  it('Home component renders Spinner on loading', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

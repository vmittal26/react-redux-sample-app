/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Home } from './Home';
import { render } from '@testing-library/react';

jest.mock('../../shared/hooks/useSearchPlanets');

// const mockUseSearchPlanets = jest.requireMock('useSearchPlanets') as jest.Mock<any>;

describe('test cases for Home', () => {
  it.skip('Home component renders correctly', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment).toMatchSnapshot();
  });
});

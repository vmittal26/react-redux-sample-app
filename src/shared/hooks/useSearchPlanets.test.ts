/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { mockPlanets } from './../../__mocks__';
import { getSearchApiUrl } from './../api/getSearchAPIURL';
import { sortPlanets } from './../utils/sortPlanets';
import useSearchPlanets, {
  getLoadingState,
  getSucessState
} from './useSearchPlanets';

const mockAxios = new MockAdapter(axios);
describe('test useSearchPlantes', () => {
  const mockSearchString = 'test';
  const URL = getSearchApiUrl('test');

  beforeAll(() => {
    sortPlanets(mockPlanets);
  });

  it('makes the server call and sets loading state and then returns success state', async () => {
    mockAxios.onGet(URL).reply(200, { results: mockPlanets });
    const { result, waitForNextUpdate } = renderHook(() => useSearchPlanets(mockSearchString));

    expect(result.current).toEqual(getLoadingState());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current).toEqual(getSucessState(mockPlanets));
    expect(result.current.isLoading).toBeFalsy();
  });

  it('make the server call and sets loading state and then if error returns error state', async () => {
    mockAxios.onGet(URL).reply(404, { results: mockPlanets });
    const { result, waitForNextUpdate } = renderHook(() => useSearchPlanets(mockSearchString));

    expect(result.current).toEqual(getLoadingState());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current.error).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
  });
});

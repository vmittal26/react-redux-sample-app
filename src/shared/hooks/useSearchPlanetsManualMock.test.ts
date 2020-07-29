import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';

import { mockPlanets } from './../../__mocks__/mockPlanets';
import { sortPlanets } from './../utils/sortPlanets';
import useSearchPlanets, { getLoadingState, getSucessState } from './useSearchPlanets';

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('test useSearchPlantes', () => {
  it.skip('make the server call and sets loading state and then returns success state', async () => {
    // const mockFetch = fetch as FetchMock;
    // const planets = JSON.stringify({ results: mockPlanets });
    // mockFetch.mockResponse(planets);
    sortPlanets(mockPlanets);

    mockAxios.get.mockResolvedValueOnce({ data: { results: mockPlanets } });
    const { result, waitForNextUpdate } = renderHook(() => useSearchPlanets('test'));

    expect(result.current).toEqual(getLoadingState());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current).toEqual(getSucessState(mockPlanets));
    expect(result.current.isLoading).toBeFalsy();
  });

  it.skip('make the server call and sets loading state and then if error returns error state', async () => {
    // const mockFetch = fetch as FetchMock;
    // const planets = JSON.stringify({ results: mockPlanets });
    // mockFetch.mockResponse(planets);
    sortPlanets(mockPlanets);

    mockAxios.get.mockRejectedValue('error');
    const { result, waitForNextUpdate } = renderHook(() => useSearchPlanets('test'));

    expect(result.current).toEqual(getLoadingState());
    expect(result.current.isLoading).toBeTruthy();
    await waitForNextUpdate();

    expect(result.current.error).toEqual([{ error: 'error' }]);
    expect(result.current.isLoading).toBeFalsy();
  });
});

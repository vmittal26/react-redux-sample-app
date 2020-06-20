import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
// import { FetchMock } from 'jest-fetch-mock';
import { PlanetInfo, SearchState } from '../model';
import { mockPlanets } from './../../__mocks__/mockPlanets';
import { sortPlanets } from './../utils/sortPlanets';
import useSearchPlanets from './useSearchPlanets';

const mockAxios = axios as jest.Mocked<typeof axios>;

export const getLoadingState = (planets: PlanetInfo[] = []): SearchState => ({
  isLoading: true,
  planets,
  error: []
});

export const getSucessState = (planets: PlanetInfo[]): SearchState => ({
  isLoading: false,
  planets,
  error: []
});

export const getFailureState = (): SearchState => ({
  isLoading: false,
  planets: [],
  error: ['error']
});
describe('test useSearchPlantes', () => {
  it('make the server call and sets loading state and then returns success state', async () => {
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

  it('make the server call and sets loading state and then if error returns error state', async () => {
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

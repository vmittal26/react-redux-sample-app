// Disabling below rule to allow usage of global functions like isNaN
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';

import { SearchState } from '../model/SearchTypes';
import { PlanetInfo } from '../model/PlanetInfo';
import { getSearchApiUrl } from '../api/getSearchAPIURL';
import { sortPlanets } from '../utils/sortPlanets';

export const getLoadingState = (planets: PlanetInfo[] = []): SearchState => ({
  isLoading: true,
  planets
});

export const getSucessState = (planets: PlanetInfo[]): SearchState => ({
  isLoading: false,
  planets
});

export const getFailureState = (error:Error): SearchState => ({
  isLoading: false,
  planets: [],
  error
});
/**
 * custom hook to fetch planets based on search text passed as input
 * and returns relevant state loading , success , error based on API call
 * @param searchText
 */
export const useSearchPlanets = (searchText: string): SearchState => {
  const [state, setState] = React.useState<SearchState>(getLoadingState());
  React.useEffect(() => {
    const fetchPlanets = async (searchQuery: string) => {
      setState(getLoadingState());
      try {
        const { data } = await axios.get(getSearchApiUrl(searchQuery));
        const planetsResponse = data.results as PlanetInfo[];
        const planets = [...planetsResponse];

        // sorting planets according to population
        sortPlanets(planets);
        setState(getSucessState(planets));
      } catch (error) {
        setState({
          isLoading: false,
          planets: [],
          error: new Error(error)
        });
      }
    };
    // if search text is empty then bypass server call and return
    if (searchText.trim() === '') {
      setState(getSucessState([]));
    } else {
      fetchPlanets(searchText);
    }
  }, [searchText]);

  return state;
};

export default useSearchPlanets;

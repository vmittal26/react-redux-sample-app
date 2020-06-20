// Disabling below rule to allow usage of global functions like isNaN
/* eslint-disable no-restricted-globals */
import React from 'react';
import axios from 'axios';

import { SearchState } from '../model/SearchTypes';
import { PlanetInfo } from '../model/PlanetInfo';
import { getSearchApiUrl } from '../api/getSearchAPIURL';
import { sortPlanets } from '../utils/sortPlanets';

/**
 * custom hook to fetch planets based on search text passed as input
 * and returns relevant state loading , success , error based on API call
 * @param searchText
 */
const useSearchPlanets = (searchText: string): SearchState => {
  const [state, setState] = React.useState<SearchState>({
    isLoading: false,
    planets: [],
    error: []
  });
  React.useEffect(() => {
    const fetchPlanets = async (searchQuery: string) => {
      setState({
        isLoading: true,
        planets: [],
        error: []
      });
      try {
        const { data } = await axios.get(getSearchApiUrl(searchQuery));
        const planetsResponse = data.results as PlanetInfo[];
        const planets = [...planetsResponse];

        // sorting planets according to population
        sortPlanets(planets);
        setState({
          isLoading: false,
          planets,
          error: []
        });
      } catch (error) {
        setState({
          isLoading: false,
          planets: [],
          error: [{ error }]
        });
      }
    };
    // if search text is empty then bypass server call and return
    if (searchText.trim() === '') {
      setState({
        isLoading: false,
        planets: [],
        error: []
      });
    } else {
      fetchPlanets(searchText);
    }
  }, [searchText]);

  return state;
};

export default useSearchPlanets;

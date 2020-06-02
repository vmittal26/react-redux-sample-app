// Disabling below rule to allow usage of global functions like isNaN
/* eslint-disable no-restricted-globals */
import React from 'react';

import { SearchState } from '../model/SearchTypes';
import { PlanetInfo } from '../model/PlanetInfo';
import { getSearchApiUrl } from '../api/getSearchAPIURL';

/**
 * custom hook to fetch planets based on search text passed as input
 * and returns relevant state loading , success , error based on API call
 * @param searchText
 */
export const useSearchPlanets = (searchText: string): SearchState => {
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
        const response = await fetch(getSearchApiUrl(searchQuery));
        const data = await response.json();
        const planetsResponse = data.results as PlanetInfo[];
        const planets = [...planetsResponse];

        // sorting planets according to population
        planets.sort((p1: PlanetInfo, p2:PlanetInfo)=>{
          const planet1 = p1 != null && !isNaN(Number(p1.population)) ? Number(p1.population) : 0;
          const planet2 = p2 != null && !isNaN(Number(p2.population)) ? Number(p2.population) : 0;
          return planet2 - planet1;
        });
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

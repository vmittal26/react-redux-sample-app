/* eslint-disable no-restricted-globals */
import { PlanetInfo } from '../model/PlanetInfo';
export const sortPlanets = (planets: PlanetInfo[]):void => {
  planets.sort((p1: PlanetInfo, p2: PlanetInfo) => {
    const planet1 = p1 != null && !isNaN(Number(p1.population)) ? Number(p1.population) : 0;
    const planet2 = p2 != null && !isNaN(Number(p2.population)) ? Number(p2.population) : 0;
    return planet2 - planet1;
  });
};

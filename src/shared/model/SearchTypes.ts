/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlanetInfo } from './PlanetInfo';
export interface SearchState {
  isLoading: boolean;
  planets: PlanetInfo[];
  error:any[]
}

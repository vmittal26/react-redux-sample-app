import React, { ReactElement } from 'react';

import { Spinner, Form } from 'react-bootstrap';
import { PlanetItem, Message } from '../../components';
import { useSearchPlanets, NO_PLANETS_FOUND } from '../../shared';
import { HomeContainer, PlanetBox, SearchBox } from './HomeCss';

/**
 * Main page to show planets based on search
 */
export const Home = (): ReactElement => {
  const [searchQuery, setSearchQuey] = React.useState<string>('');
  const { isLoading, planets } = useSearchPlanets(searchQuery);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setSearchQuey(value);
  };

  let planetBox = (
    <PlanetBox>
      {searchQuery.trim() !== '' && planets.length > 0 ? (
        planets.map((planet) => <PlanetItem key={planet.name} {...planet} />)
      ) : (
        <Message message={NO_PLANETS_FOUND} />
      )}
    </PlanetBox>
  );

  if (isLoading) {
    planetBox = (
      <PlanetBox>
        <Spinner animation="border" variant="primary" />
      </PlanetBox>
    );
  }
  return (
    <HomeContainer>
      <SearchBox>
        <Form.Control
          className="search"
          type="text"
          placeholder="Search Planets"
          onChange={onSearch}
        />
      </SearchBox>
      {planetBox}
    </HomeContainer>
  );
};

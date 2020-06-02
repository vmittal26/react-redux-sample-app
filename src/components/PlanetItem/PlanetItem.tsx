/* eslint-disable camelcase */
import React, { ReactElement } from 'react';
import { PlanetInfoBox } from './PlanetItemCss';
import { PlanetInfo } from '../../shared';
import { Card } from 'react-bootstrap';
import { PlanetDataItem } from '../PlanetDataItem/PlanetDataItem';

export const PlanetItem = (planetInfo: PlanetInfo): ReactElement => {
  const {
    name,
    rotation_period,
    orbital_period,
    climate,
    terrain,
    diameter,
    population
  } = planetInfo;
  return (
    <PlanetInfoBox key={name}>
      {
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <PlanetDataItem name="Rotation Period" value={rotation_period} />
          <Card.Text>
            <PlanetDataItem name="Orbital period" value={orbital_period} />
          </Card.Text>
          <Card.Text>
            <PlanetDataItem name="Climate" value={climate} />
          </Card.Text>
          <Card.Text>
            <PlanetDataItem name="Diameter" value={diameter} />
          </Card.Text>
          <Card.Text>
            <PlanetDataItem name="Terrain" value={terrain} />
          </Card.Text>
          <Card.Subtitle className="py-2 text-muted">
            <PlanetDataItem
              name="Population"
              variant="secondary"
              value={population}
            />
          </Card.Subtitle>
        </Card.Body>
      }
    </PlanetInfoBox>
  );
};

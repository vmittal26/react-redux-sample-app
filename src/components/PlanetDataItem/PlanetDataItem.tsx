import React, { ReactElement } from 'react';
import { Card, Badge } from 'react-bootstrap';

interface PlanetDataItemProps {
  variant?:'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined;
  name: string;
  value: string;
}
export const PlanetDataItem = ({
  name,
  variant = 'primary',
  value
}: PlanetDataItemProps): ReactElement => {
  return (
    <Card.Text>
      <Badge pill variant={variant}>
        {name}
      </Badge>
      <span className="ml-2">{value}</span>
    </Card.Text>
  );
};

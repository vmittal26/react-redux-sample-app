import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const HomeContainer = styled(Card)`
  width:80%;
  font-size:0.9rem;
  background-color:#F5F5F6;
  max-width:68rem;
  margin: auto;
  margin-top: 2.8rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 90vh;
  padding: 0.5rem;
`;

export const SearchBox = styled.div`
  display: block;
  margin: auto;
  padding: 0.5rem;
  .search {
    display: block;
    margin: 0 auto;
  }
`;

export const PlanetBox = styled.div`
  display: flex;
  flex:1;
  justify-content:flex-start;
  flex-wrap: wrap;
  overflow:auto;
  .spinner-border {
    margin: auto;
  }
`;

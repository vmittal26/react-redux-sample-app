import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const LoginContainer = styled(Card)`
   display:flex;
   position: absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%); 
   padding:4em 2em;
   flex-direction:column;
   width:30%;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   &:hover{
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
   }
   button{
      width:100%;
   }
`;

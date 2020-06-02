import styled from 'styled-components';

const HeaderWrapper = styled.div`
     background-color: #24292e;
     display: flex;
     top:0;
     position:fixed;
     width:100%;
     height: 2.5rem;
     align-items:center;
     z-index:1;
     padding:0 2rem;

     .home-button{
          outline:none;
          border:none;
          background-color:transparent;
          color:white;
          &:hover{
               color:rgba(255, 255, 255, 0.8);
          }
     }
     img{
          width:1.5rem;
          margin-left:auto;
          cursor: pointer;
          height:1.5rem;
     }
`;

export default HeaderWrapper;

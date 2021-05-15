import styled from 'styled-components';

export const NavContent = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #d4165b;

  .nav-contents {
    a { 
      text-decoration: none;
      color: #fff;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;

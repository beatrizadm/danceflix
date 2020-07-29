import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 5px;
  color: var(--white);
  text-align: center;
  a {
    text-decoration:none;
  }
  a:hover {
    color: var(--primary);
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

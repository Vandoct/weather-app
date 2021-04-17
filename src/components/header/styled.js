import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  padding: 1em;

  img {
    cursor: pointer;
  }
`;

export default HeaderStyled;

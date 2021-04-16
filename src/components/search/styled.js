import styled from 'styled-components';

const SearchWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
  background: white;
  border-radius: 32px;

  & :nth-child(odd) {
    padding: 0.5em;
  }

  & :nth-child(2) {
    font-size: 1.5em;
    order: 0;
    flex: 1 1 auto;
  }
`;

const SearchStyled = styled.input`
  outline: none;
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  -webkit-appearance: none;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 0.25em;
  overflow: hidden;
`;

const SuggestionItem = styled.a`
  color: #2079c9;
  text-decoration: none;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted #ccc;
  font-size: 1rem;
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export { SearchWrapper, SearchStyled, ResultWrapper, SuggestionItem };

import PropTypes from 'prop-types';
import { ResultWrapper, SuggestionItem } from './styled';

const SearchResult = (props) => {
  const { results, onClick } = props;

  return (
    <ResultWrapper>
      {results.map((item) => (
        <SuggestionItem key={item.id} onClick={() => onClick(item.label)}>
          {item.label}
        </SuggestionItem>
      ))}
    </ResultWrapper>
  );
};

SearchResult.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchResult;

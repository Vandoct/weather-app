import { MyLocationOutlined, SearchOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';
import { SearchStyled, SearchWrapper } from './styled';

const SearchBar = (props) => {
  const {
    cities,
    onSearchChanged,
    onResultClicked,
    onLocationClicked,
    reference,
  } = props;

  return (
    <>
      <SearchWrapper className="search-wrapper">
        <SearchOutlined />
        <SearchStyled
          type="text"
          placeholder="City"
          onChange={onSearchChanged}
        />
        <MyLocationOutlined onClick={onLocationClicked} />
      </SearchWrapper>
      <SearchResult
        results={cities}
        onClick={onResultClicked}
        reference={reference}
      />
    </>
  );
};

SearchBar.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onSearchChanged: PropTypes.func.isRequired,
  onResultClicked: PropTypes.func.isRequired,
  onLocationClicked: PropTypes.func.isRequired,
  reference: PropTypes.shape({}).isRequired,
};

export default SearchBar;

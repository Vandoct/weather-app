import CurrentWeather from 'components/cards/CurrentWeather';
import ExtendedForecast from 'components/cards/ExtendedForecast';
import Header from 'components/header/Header';
import SearchBar from 'components/search/SearchBar';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { useOutsideAlerter } from 'hooks/useOutsideAlerter';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../redux';

const Home = () => {
  const [query, setQuery] = useState('');
  const { places } = useSelector((state) => state.places);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useOutsideAlerter(() => {
    dispatch(search(''));
  }, searchRef);

  useDebouncedEffect(() => dispatch(search(query)), 500, [query]);

  const onSearchChanged = (e) => {
    setQuery(e.target.value);
  };

  const onResultClicked = (result) => {
    const city = result.split(',')[0];
    console.log(city);
  };

  return (
    <>
      <Header />
      <SearchBar
        cities={places}
        onSearchChanged={onSearchChanged}
        onResultClicked={onResultClicked}
        reference={searchRef}
      />
      <CurrentWeather />
      <ExtendedForecast />
    </>
  );
};

export default Home;

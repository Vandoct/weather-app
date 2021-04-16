import CurrentWeather from 'components/cards/CurrentWeather';
import ExtendedForecast from 'components/cards/ExtendedForecast';
import Header from 'components/header/Header';
import SearchBar from 'components/search/SearchBar';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { useState } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');

  useDebouncedEffect(() => console.log(query), 500, [query]);

  const onSearchChanged = (e) => {
    setQuery(e.target.value);
  };

  const onResultClicked = (result) => {
    console.log(result);
  };

  return (
    <>
      <Header />
      <SearchBar
        cities={
          [
            // { id: '1', label: 'a' },
            // { id: '2', label: 'b' },
            // { id: '3', label: 'c' },
          ]
        }
        onSearchChanged={onSearchChanged}
        onResultClicked={onResultClicked}
      />
      <CurrentWeather />
      <ExtendedForecast />
    </>
  );
};

export default Home;

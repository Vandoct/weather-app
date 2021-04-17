import CurrentWeather from 'components/cards/CurrentWeather';
import ExtendedForecast from 'components/cards/ExtendedForecast';
import Header from 'components/header/Header';
import SearchBar from 'components/search/SearchBar';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { useOutsideAlerter } from 'hooks/useOutsideAlerter';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmptyObject } from 'utils/helper';
import { getCurrentWeather, search } from '../../redux';

const Home = () => {
  const [query, setQuery] = useState('');
  const [isCelcius, setIsCelcius] = useState(true);
  const { places } = useSelector((state) => state.places);
  const { weather } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useDebouncedEffect(() => dispatch(search(query)), 500, [query]);

  useOutsideAlerter(() => {
    if (places.length) dispatch(search(''));
  }, searchRef);

  const onSearchChanged = (e) => {
    setQuery(e.target.value);
  };

  const onResultClicked = (result) => {
    const city = result.split(',')[0];
    dispatch(search(''));
    dispatch(getCurrentWeather(city));
  };

  const handleToggle = () => {
    setIsCelcius((prevState) => !prevState);
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
      {!isEmptyObject(weather) && (
        <CurrentWeather
          isCelcius={isCelcius}
          onToggle={handleToggle}
          city={weather.info.city}
          icon={weather.info.icon}
          temp={
            isCelcius ? weather.info.temp.celcius : weather.info.temp.farenheit
          }
          weather={weather.info.weather}
          feels={
            isCelcius
              ? weather.detail.feels.celcius
              : weather.detail.feels.farenheit
          }
          min={
            isCelcius
              ? weather.detail.min.celcius
              : weather.detail.min.farenheit
          }
          max={
            isCelcius
              ? weather.detail.max.celcius
              : weather.detail.max.farenheit
          }
          humidity={weather.detail.humidity}
          pressure={weather.detail.pressure}
          wind={weather.detail.wind}
        />
      )}
      <ExtendedForecast />
    </>
  );
};

export default Home;

import CurrentWeather from 'components/cards/CurrentWeather';
import ExtendedForecast from 'components/cards/ExtendedForecast';
import Header from 'components/header/Header';
import SearchBar from 'components/search/SearchBar';
import { useDebouncedEffect } from 'hooks/useDebouncedEffect';
import { useOutsideAlerter } from 'hooks/useOutsideAlerter';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmptyArray, isEmptyObject } from 'utils/helper';
import { getCurrentWeather, getWeatherForecast, search } from '../../redux';

const Home = () => {
  const [query, setQuery] = useState('');
  const [isCelcius, setIsCelcius] = useState(true);
  const { places } = useSelector((state) => state.places);
  const { weather, forecasts } = useSelector((state) => state.weather);
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
    dispatch(getWeatherForecast(city));
  };

  const handleGetCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          dispatch(getCurrentWeather('', latitude, longitude));
          dispatch(getWeatherForecast('', latitude, longitude));
        },
        (error) => {
          toast.error(error.message, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
      );
    } else {
      toast.error('Geolocation is not available!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
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
        onLocationClicked={handleGetCurrentLocation}
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
      {!isEmptyArray(forecasts) && (
        <ExtendedForecast forecasts={forecasts} isCelcius={isCelcius} />
      )}
    </>
  );
};

export default Home;

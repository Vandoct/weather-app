import PropTypes from 'prop-types';
import {
  CardHeader,
  CardWrapper,
  ForecastItem,
  ForecastWrapper,
} from './styled';

const ExtendedForecast = (props) => {
  const { forecasts, isCelcius } = props;

  return (
    <CardWrapper>
      <CardHeader>
        <span>Extended Forecast</span>
      </CardHeader>
      <ForecastWrapper>
        {forecasts.map((forecast) => (
          <ForecastItem key={forecast.id}>
            <p>{forecast.day}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
              height={50}
              width={50}
              alt="logo"
            />
            <p>{forecast.weather}</p>
            <p>
              {isCelcius ? forecast.max.celcius : forecast.max.farenheit}
              <sup>o</sup>/
              {isCelcius ? forecast.min.celcius : forecast.min.farenheit}
              <sup>o</sup>
            </p>
          </ForecastItem>
        ))}
      </ForecastWrapper>
    </CardWrapper>
  );
};

ExtendedForecast.defaultProps = {
  isCelcius: true,
};

ExtendedForecast.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      day: PropTypes.string,
      icon: PropTypes.string,
      weather: PropTypes.string,
      min: PropTypes.exact({
        celcius: PropTypes.number,
        farenheit: PropTypes.number,
      }),
      max: PropTypes.exact({
        celcius: PropTypes.number,
        farenheit: PropTypes.number,
      }),
    })
  ).isRequired,
  isCelcius: PropTypes.bool,
};

export default ExtendedForecast;

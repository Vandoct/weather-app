import logo from 'assets/images/github.png';
import {
  CardHeader,
  CardWrapper,
  ForecastItem,
  ForecastWrapper,
} from './styled';

const ExtendedForecast = () => {
  return (
    <CardWrapper>
      <CardHeader>
        <span>Extended Forecast</span>
      </CardHeader>
      <ForecastWrapper>
        <ForecastItem>
          <p>Sat</p>
          <img src={logo} height={50} width={50} alt="logo" />
          <p>Clear</p>
          <p>
            36<sup>o</sup>/27<sup>o</sup>
          </p>
        </ForecastItem>
      </ForecastWrapper>
    </CardWrapper>
  );
};

export default ExtendedForecast;

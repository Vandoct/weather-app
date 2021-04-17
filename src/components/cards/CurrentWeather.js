import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import humidityIcon from 'assets/images/humidity.png';
import pressureIcon from 'assets/images/pressure.png';
import windIcon from 'assets/images/wind.png';
import Switch from 'components/switch/Switch';
import PropTypes from 'prop-types';
import {
  CardBody,
  CardDegree,
  CardHeader,
  CardIllustration,
  CardInfo,
  CardWrapper,
  DegreeWrapper,
  IllustrationWrapper,
  InfoWrapper,
} from './styled';

const CurrentWeather = (props) => {
  const {
    isCelcius,
    onToggle,
    city,
    icon,
    temp,
    weather,
    feels,
    min,
    max,
    humidity,
    wind,
    pressure,
  } = props;

  return (
    <CardWrapper>
      <CardHeader>
        <span>Current Weather</span>
        <Switch toggled={isCelcius} onToggle={onToggle} />
      </CardHeader>
      <CardBody>
        <IllustrationWrapper>
          <b>{city}</b>
          <CardIllustration>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              height={100}
              width={100}
              alt={weather}
            />
            <p>{temp}</p>
            <span>O</span>
          </CardIllustration>
          <span>{weather}</span>
        </IllustrationWrapper>
        <div>
          <p>
            Feels like {feels}
            <sup>o</sup>
          </p>
          <DegreeWrapper>
            <CardDegree>
              <ArrowUpward />
              <p>{max}</p>
              <span>O</span>
            </CardDegree>
            <CardDegree>
              <ArrowDownward />
              <p>{min}</p>
              <span>O</span>
            </CardDegree>
          </DegreeWrapper>
          <InfoWrapper>
            <CardInfo>
              <div>
                <img src={humidityIcon} height={24} width={24} alt="humidity" />
              </div>
              <div>
                <img src={windIcon} height={24} width={24} alt="wind" />
              </div>
              <div>
                <img src={pressureIcon} height={24} width={24} alt="pressure" />
              </div>
            </CardInfo>
            <CardInfo>
              <p>Humidity</p>
              <p>Wind</p>
              <p>Pressure</p>
            </CardInfo>
            <CardInfo>
              <p>{humidity}%</p>
              <p>{wind}kph</p>
              <p>{pressure}hPa</p>
            </CardInfo>
          </InfoWrapper>
        </div>
      </CardBody>
    </CardWrapper>
  );
};

CurrentWeather.defaultProps = {
  isCelcius: true,
};

CurrentWeather.propTypes = {
  isCelcius: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  feels: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default CurrentWeather;

import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import logo from 'assets/images/github.png';
import humidity from 'assets/images/humidity.png';
import pressure from 'assets/images/pressure.png';
import wind from 'assets/images/wind.png';
import Switch from 'components/switch/Switch';
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

const CurrentWeather = () => {
  return (
    <CardWrapper>
      <CardHeader>
        <span>Current Weather</span>
        <Switch toggled={false} onToggle={() => {}} />
      </CardHeader>
      <CardBody>
        <IllustrationWrapper>
          <b>Paris</b>
          <CardIllustration>
            <img src={logo} height={100} width={100} alt="#" />
            <p>36</p>
            <span>O</span>
          </CardIllustration>
          <span>clear sky</span>
        </IllustrationWrapper>
        <div>
          <p>
            Feels like 34<sup>o</sup>
          </p>
          <DegreeWrapper>
            <CardDegree>
              <ArrowUpward />
              <p>10</p>
              <span>O</span>
            </CardDegree>
            <CardDegree>
              <ArrowDownward />
              <p>5</p>
              <span>O</span>
            </CardDegree>
          </DegreeWrapper>
          <InfoWrapper>
            <CardInfo>
              <div>
                <img src={humidity} height={24} width={24} alt="humidity" />
              </div>
              <div>
                <img src={wind} height={24} width={24} alt="wind" />
              </div>
              <div>
                <img src={pressure} height={24} width={24} alt="pressure" />
              </div>
            </CardInfo>
            <CardInfo>
              <p>Humidity</p>
              <p>Wind</p>
              <p>Pressure</p>
            </CardInfo>
            <CardInfo>
              <p>23%</p>
              <p>9kph</p>
              <p>1016hPa</p>
            </CardInfo>
          </InfoWrapper>
        </div>
      </CardBody>
    </CardWrapper>
  );
};

export default CurrentWeather;

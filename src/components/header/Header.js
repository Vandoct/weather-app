import logo from 'assets/images/github.png';
import HeaderStyled from './styled';

const Header = () => (
  <HeaderStyled>
    <h1>Weather App</h1>
    <img src={logo} width={50} height={50} alt="Github Logo" />
  </HeaderStyled>
);

export default Header;

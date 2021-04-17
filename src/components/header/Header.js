import logo from 'assets/images/github.png';
import PropTypes from 'prop-types';
import HeaderStyled from './styled';

const Header = (props) => {
  const { githubUrl } = props;

  return (
    <HeaderStyled>
      <h1>Weather App</h1>
      <a href={githubUrl} target="_blank" rel="noreferrer noopener">
        <img src={logo} width={50} height={50} alt="Github Logo" />
      </a>
    </HeaderStyled>
  );
};

Header.propTypes = {
  githubUrl: PropTypes.string.isRequired,
};

export default Header;

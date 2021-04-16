import PropTypes from 'prop-types';
import { Container, Padding } from './styled';

const AppWrapper = ({ children }) => (
  <Container>
    <Padding>{children}</Padding>
  </Container>
);

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;

import PropTypes from 'prop-types';
import { Slider, SwitchStyled } from './styled';

const Switch = (props) => {
  const { toggled, onToggle } = props;

  return (
    <SwitchStyled onClick={onToggle}>
      {toggled && <span className="on">F</span>}
      {!toggled && <span className="off">C</span>}
      <Slider
        style={{
          transform: toggled ? ' translateX(28px)' : ' translateX(0px)',
        }}
      />
    </SwitchStyled>
  );
};

Switch.propTypes = {
  toggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Switch;

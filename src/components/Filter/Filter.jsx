import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ title, value, onChange }) => {
  return (
    <Label>
      {title}
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

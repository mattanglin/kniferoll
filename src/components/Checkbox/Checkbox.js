import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { defaultStyle, mapPropsAndThemeToStyle } from './Checkbox.style';
import Wrapper from '../FieldWrapper/FieldWrapper';
import { asSwitch } from '../helpers';

/**
 * Basic checkbox input.
 */
export const Checkbox = ({
  checkedComponent,
  className,
  description,
  disabled,
  error,
  focused, // eslint-disable-line
  label,
  name,
  onSwitch,
  uncheckedComponent,
  switched,
  ...rest
}) => (
  <Wrapper
    description={description}
    error={error}
    labelFor={name}
  >
    <div
      className={`checkbox ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onSwitch}
      {...rest}
    >
      <div className={`check ${switched ? 'checked' : 'unchecked'}`}>
        <div className="checkbox-checked">
          {checkedComponent}
        </div>
        <div className="checkbox-unchecked">
          {uncheckedComponent}
        </div>
      </div>
      {label &&
        <label htmlFor={label}>{label}</label>
      }
    </div>
  </Wrapper>
);

Checkbox.propTypes = {
  /**
   * Component to display when checked
   */
  checkedComponent: PropTypes.node,
  /**
   * className for glamorous styles
   * @ignore
   */
  className: PropTypes.string.isRequired,
  /**
   * Set true to default checked.
   */
  defaultValue: PropTypes.bool,
  /**
   * Helper description for tooltip
   */
  description: PropTypes.string,
  /**
   * Whether checkbox is disabled or not.
   * onSwitch, onChange and onClick will not fire if disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message for input. Alters input style and displays error message if set.
   */
  error: PropTypes.string,
  /**
   * Field label text to display above input
   */
  label: PropTypes.string,
  /**
   * Field name in form
   */
  name: PropTypes.string,
  /**
   * Function to call on input blur
   */
  onBlur: PropTypes.func,
  /**
   * Function to call on input change
   */
  onChange: PropTypes.func,
  /**
   * Function to call when when switched.
   * Also fires onChange and onClick if passed as props.
   * Will not fire when disabled.
   */
  onSwitch: PropTypes.func,
  /**
   * Component to display when unchecked
   */
  uncheckedComponent: PropTypes.node,
  /**
   * Switched state from asSwtich HOC
   * @ignore
   */
  switched: PropTypes.bool.isRequired,
  /**
   * Input value. Whether checked or not.
   */
  value: PropTypes.bool,
};
Checkbox.defaultProps = {
  checkedComponent: <i className="fa fa-check-square-o" />,
  uncheckedComponent: <i className="fa fa-square-o" />
};

export default asSwitch(
  glamorous(Checkbox)(defaultStyle, mapPropsAndThemeToStyle)
);

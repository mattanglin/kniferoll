import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glamorous from 'glamorous';
import { defaultStyle, mapPropsAndThemeToStyle } from './Toggle.style';
import Wrapper from '../FieldWrapper/FieldWrapper';
import { asSwitch } from '../helpers';
import { fieldInput } from '../helpers/fieldComposers';

/**
 * Basic checkbox input.
 */
export const Toggle = ({
  className,
  description,
  disabled,
  error,
  focused, // eslint-disable-line
  label,
  name,
  onSwitch,
  switched,
  ...rest
}) => (
  <Wrapper
    description={description}
    error={error}
    labelFor={name}
  >
    <div
      className={classNames('toggle', className, { disabled, on: switched, off: !switched })}
      onClick={onSwitch}
      {...rest}
    >
      {label &&
        <label htmlFor={label}>{label}</label>
      }
      <div className="wrapper">
        <div className="switch-rail">
          <div className="switch" />
        </div>
      </div>
    </div>
  </Wrapper>
);

Toggle.propTypes = {
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
   * Function to call when switched.
   * Also fires onChange and onClick if passed as props.
   * Will not fire when disabled.
   */
  onSwitch: PropTypes.func,
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

const StyledToggle = asSwitch(
  glamorous(Toggle)(defaultStyle, mapPropsAndThemeToStyle)
);

export const FieldToggle = fieldInput(StyledToggle);
export default StyledToggle;

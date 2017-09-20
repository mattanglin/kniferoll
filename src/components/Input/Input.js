import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { style } from './Input.style';
import Wrapper from '../FieldWrapper/FieldWrapper';
import { withFocus } from '../helpers';
import { fieldInput } from '../helpers/fieldComposers';

/**
 * Basic form input. All other props passed to this component will be
 * passed through to the actual input field.
 */
export const Input = ({
  className,
  description,
  error,
  focused, // eslint-disable-line
  label,
  name,
  wrapperProps,
  ...rest
}) => (
  <Wrapper
    description={description}
    error={error}
    label={label}
    labelFor={name}
    wrapperProps={wrapperProps}
  >
    <div className={`input ${className}`}>
      <input
        {...rest}
        id={name}
        name={name}
      />
    </div>
  </Wrapper>
);

Input.propTypes = {
  /**
   * className for glamorous styles
   */
  className: PropTypes.string.isRequired,
  /**
   * Helper description for tooltip
   */
  description: PropTypes.string,
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
   * Function to call on input focus
   */
  onFocus: PropTypes.func,
  /**
   * Placeholder text for input
   */
  placeholder: PropTypes.string,
  /**
   * Input type
   */
  type: PropTypes.string.isRequired,
  /**
   * Props to pass on to the Input Component Wrapper.
   */
  wrapperProps: PropTypes.object,
  /**
   * Input value
   */
  value: PropTypes.string,
};
Input.defaultProps = {
  type: 'text'
};

export const BasicInput = glamorous(Input)(style);

const FocusedInput = withFocus(
  glamorous(Input)(style)
);

export const FieldInput = fieldInput(FocusedInput);
export default FocusedInput;

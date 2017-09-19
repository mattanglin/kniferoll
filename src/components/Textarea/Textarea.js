import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { defaultStyle, mapPropsAndThemeToStyle } from './Textarea.style';
import Wrapper from '../FieldWrapper/FieldWrapper';
import { withFocus } from '../helpers';

/**
 * Basic form textarea input. All other props passed to this component will be
 * passed through to the actual textarea element.
 */
export const Textarea = ({
  className,
  description,
  error,
  focused, // eslint-disable-line
  label,
  name,
  rows,
  wrapperProps,
  ...rest
}) => (
  <Wrapper
    description={description}
    error={error}
    label={label}
    labelFor={name}
    {...wrapperProps}
  >
    <div className={`textarea ${className}`}>
      <textarea
        {...rest}
        id={name}
        name={name}
        rows={rows}
      />
    </div>
  </Wrapper>
  );

Textarea.propTypes = {
  /**
   * className for glamorous styles
   */
  className: PropTypes.string.isRequired,
  /**
   * Helper description for tooltip
   */
  description: PropTypes.string,
  /**
   * Error message for textarea. Alters textarea style and displays error message if set.
   */
  error: PropTypes.string,
  /**
   * Whether this component has focus or not.
   * Automatically set by onFocus and onBlur coming
   * from withFocus HOC
   */
  focused: PropTypes.bool,
  /**
   * Field label text to display above textarea
   */
  label: PropTypes.string,
  /**
   * Field name in form
   */
  name: PropTypes.string,
  /**
   * Function to call on textarea blur
   */
  onBlur: PropTypes.func,
  /**
   * Function to call on textarea change
   */
  onChange: PropTypes.func,
  /**
   * Function to call on textarea focus
   */
  onFocus: PropTypes.func,
  /**
   * Placeholder text for textarea
   */
  placeholder: PropTypes.string,
  /**
   * Number of rows for this Textarea
   */
  rows: PropTypes.number,
  /**
   * Input value
   */
  wrapperProps: PropTypes.object,
  /**
   * props defined in the instrument for the purpose of style
   */
  value: PropTypes.string,
};
Textarea.defaultProps = {
  rows: 5
};

export default withFocus(
  glamorous(Textarea)(defaultStyle, mapPropsAndThemeToStyle)
);

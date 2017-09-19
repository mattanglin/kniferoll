import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { defaultStyle, mapPropsAndThemeToStyle } from './FieldWrapper.style';

export const FieldWrapper = ({
  children,
  className,
  description,
  error,
  label,
  labelFor,
  wrapperProps
}) => (
  <div className={`field ${className}`} {...wrapperProps}>
    {label &&
      <label htmlFor={labelFor}>{label}</label>
    }
    {description && null}
    <div className="children">
      {children}
    </div>
    {error &&
      <div className="error">{error}</div>
    }
  </div>
);

FieldWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  wrapperProps: PropTypes.object,
};
FieldWrapper.defaultProps = {

};

export default glamorous(FieldWrapper)(defaultStyle, mapPropsAndThemeToStyle);

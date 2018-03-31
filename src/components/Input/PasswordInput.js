import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputComponent from './Input';
import { fieldInput } from '../helpers/fieldComposers';

export class PasswordInput extends Component {
  static propTypes = {
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
  };

  constructor(props) {
    super(props);

    // Always init with empty value
    this.state = {
      value: '',
    };
  }

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }
  }

  handleBlur = ({ target: { value } }) => {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(value);
    }
  }

  handleFocus = ({ target: { value } }) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(value);
    }
  }

  render() {
    const {
      /* eslint-disable */
      value,
      onChange,
      onBlur,
      onFocus,
      /* eslint-enable */
      ...rest
    } = this.props;

    return (
      <InputComponent
        {...rest}
        type="password"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
      />
    );
  }
}

export const FieldPasswordInput = fieldInput(PasswordInput);
export default PasswordInput;

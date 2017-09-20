import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glamorous from 'glamorous';
import { style } from './Button.style';

/**
 *  Simple button.
 */
export const Button = ({
  className,
  children,
  disabled,
  href,
  loading,
  loadingContent,
  onClick,
  ...rest,
}) => {
  if (href) {
    return (
      <a
        {...rest}
        className={classNames(className, { disabled, loading })}
        href={href}
        onClick={(loading || disabled) ? null : onClick}
      >
        {loading && loadingContent ? loadingContent : children}
      </a>
    );
  }

  return (
    <button
      {...rest}
      className={classNames(className, { disabled, loading })}
      onClick={(loading || disabled) ? null : onClick}
    >
      {loading && loadingContent ? loadingContent : children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Button child content
   */
  children: PropTypes.node,
  /**
   * className required by glamorous
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Whether button is disabled or not. Prevents onClick.
   */
  disabled: PropTypes.bool,
  /**
   * Href link. Will turn button into `<a/>` element.
   */
  href: PropTypes.string,
  /**
   * Whether button is loading asynchronous content or not.
   * Will block onClick if true.
   */
  loading: PropTypes.bool,
  /**
   * Loading content to replace children when loading
   */
  loadingContent: PropTypes.node,
  /**
   * Button onClick handler function.
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  loadingContent: 'loading...'
};

export default glamorous(Button)(style);

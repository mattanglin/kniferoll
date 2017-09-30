import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *  Simple grid Row component.
 */
const Row = ({
  children,
  className,
  reverse,
  ...rest,
}) => (
  <div {...rest} className={classNames('row', { reverse }, className)}>
    {children}
  </div>
);

Row.propTypes = {
  /**
   * Row children
   */
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Whether to reverse the column order or not
   */
  reverse: PropTypes.bool,
};
Row.defaultProps = {
  reverse: false
};

export default Row;

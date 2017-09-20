import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = ({
  children,
  reverse,
}) => (
  <div className={classNames('row', { reverse })}>
    {children}
  </div>
);

Row.propTypes = {
  /**
   * Row children
   */
  children: PropTypes.node,
  /**
   * Whether to reverse the column order or not
   */
  reverse: PropTypes.bool,
};
Row.defaultProps = {
  reverse: false
};

export default Row;

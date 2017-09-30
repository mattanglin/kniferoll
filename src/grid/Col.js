import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *  Grid column component
 */
const Col = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  ...rest,
}) => (
  <div
    {...rest}
    className={classNames({
      [`col-xs-${xs}`]: xs !== undefined,
      [`col-sm-${sm}`]: sm !== undefined,
      [`col-md-${md}`]: md !== undefined,
      [`col-lg-${lg}`]: lg !== undefined,
      [`col-xs-offset-${xsOffset}`]: xsOffset !== undefined,
      [`col-sm-offset-${smOffset}`]: smOffset !== undefined,
      [`col-md-offset-${mdOffset}`]: mdOffset !== undefined,
      [`col-lg-offset-${lgOffset}`]: lgOffset !== undefined,
    }, className)}
  >
    {children}
  </div>
);

Col.propTypes = {
  /**
   * Col children
   */
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Col spread at xs
   */
  xs: PropTypes.number,
  /**
   * Col spread at sm
   */
  sm: PropTypes.number,
  /**
   * Col spread at md
   */
  md: PropTypes.number,
  /**
   * Col spread at lg
   */
  lg: PropTypes.number,
  /**
   * Col offset at xs
   */
  xsOffset: PropTypes.number,
  /**
   * Col offset at sm
   */
  smOffset: PropTypes.number,
  /**
   * Col offset at md
   */
  mdOffset: PropTypes.number,
  /**
   * Col offset at lg
   */
  lgOffset: PropTypes.number,
};

export default Col;

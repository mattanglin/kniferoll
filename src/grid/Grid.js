import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glamorous from 'glamorous';
import { calculateGridStyle } from './Grid.style';

export const Grid = ({
  children,
  className,
  fluid,

  /* eslint-disable */
  columns,
  xsBreak,
  smBreak,
  mdBreak,
  lgBreak,
  /* eslint-enable */
}) => (
  <div className={classNames(className, 'container', { 'container-fluid': fluid })}>
    {children}
  </div>
);

Grid.propTypes = {
  /**
   * Grid child components.
   */
  children: PropTypes.node,
  /**
   * className required by glamorous
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Number of columns for grid
   */
  columns: PropTypes.number.isRequired,
  /**
   * Container padding.
   * Number for pixel amount, or css string
   */
  padding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  /**
   * Fluid container or not
   */
  fluid: PropTypes.bool,
  /**
  * xs breakpoint for grid.
  * Number for pixel amount, or css string
  */
  xsBreak: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  /**
   * sm breakpoint for grid.
   * Number for pixel amount, or css string
   */
  smBreak: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  /**
   * md breakpoint for grid.
   * Number for pixel amount, or css string
   */
  mdBreak: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  /**
   * lg breakpoint for grid.
   * Number for pixel amount, or css string
   */
  lgBreak: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
};

const GlamorGrid = glamorous(Grid)(calculateGridStyle);

GlamorGrid.defaultProps = {
  columns: 12,
  padding: 15,
  fluid: true,
  xsBreak: 576,
  smBreak: 768,
  mdBreak: 992,
  lgBreak: 1200,
};

export default GlamorGrid;

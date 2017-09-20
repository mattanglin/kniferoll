import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glamorous from 'glamorous';
import { calculateGridStyle } from './Grid.style';

/**
 *  Grid container component.
 *  Setup the grid here for it's child components.
 */
export const Grid = ({
  children,
  className,
  fluid,

  /* eslint-disable */
  columns,
  padding,
  gutter,
  xsBreak,
  smBreak,
  mdBreak,
  unit,
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
  columns: PropTypes.number,
  /**
   * Container padding.
   */
  padding: PropTypes.number,
  /**
   * Column gutter size
   */
  gutter: PropTypes.number,
  /**
   * Fluid container or not
   */
  fluid: PropTypes.bool,
  /**
  * xs breakpoint for grid.
  */
  xsBreak: PropTypes.number,
  /**
   * sm breakpoint for grid.
   */
  smBreak: PropTypes.number,
  /**
   * md breakpoint for grid.
   */
  mdBreak: PropTypes.number,
  /**
   * Unit measurement for grid. Applied to padding, gutter, and breakpoints.
   */
  unit: PropTypes.string,
};
Grid.defaultProps = {
  columns: 12,
  padding: 15,
  gutter: 15,
  fluid: true,
  xsBreak: 576,
  smBreak: 768,
  mdBreak: 992,
  unit: 'px',
};

const GlamorGrid = glamorous(Grid)(calculateGridStyle);

GlamorGrid.defaultProps = Grid.defaultProps;

export default GlamorGrid;

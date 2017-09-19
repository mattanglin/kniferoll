import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import glamorous from 'glamorous';
import { style } from './Grid.style';

export const Grid = ({
  children,
  className,
  fluid
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
   * Fluid container or not
   */
  fluid: PropTypes.bool
};

const GlamorGrid = glamorous(Grid)(style);

GlamorGrid.defaultProps = {
  // Add props for breakpoints?
  // xs/sm/md/lg
  // Do we just make styles for row/col children based on this?
};

export default GlamorGrid;

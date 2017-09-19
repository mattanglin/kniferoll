import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import glamorous from 'glamorous';
import * as helpers from './helpers';

const defaultTimeout = 300;

/**
 * Simple opacity fade in/out transition
 */
const FadeTransition = ({
  className,
  timeout,
  ...rest
}) => (
  <div className={className}>
    {/* We must wrap a Transition in a div to absorb the className from glamorous */}
    <CSSTransition
      {...rest}
      classNames="fade"
      timeout={timeout}
    />
  </div>
);

FadeTransition.propTypes = {
  className: PropTypes.string,
  /**
   * How long to fade in/out
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]).isRequired,
};
FadeTransition.defaultProps = {
  timeout: defaultTimeout
};

export const mapTransitionStyle = ({ timeout = defaultTimeout }) => {
  const enter = helpers.getEnter(timeout);
  const exit = helpers.getExit(timeout);

  return {
    '& .fade-enter': {
      opacity: 0,
    },
    '& .fade-enter.fade-enter-active': {
      opacity: 1,
      transition: `opacity ${enter}ms ease-in-out`,
    },
    '& .fade-exit': {
      opacity: 1,
    },
    '& .fade-exit.fade-exit-active': {
      opacity: 0,
      transition: `opacity ${exit}ms ease-in-out`,
    },
  };
};

export default glamorous(FadeTransition)(mapTransitionStyle);

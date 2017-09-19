import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import glamorous from 'glamorous';
import * as helpers from './helpers';

const defaultSlide = 'up';
const defaultTimeout = 300;
const defaultPercent = 100;
const getTranslate = (slideDirection = defaultSlide, enterOrExit, percent = defaultPercent) => {
  const slide = slideDirection[enterOrExit] || slideDirection;

  switch (slide) {
    case 'up':
      return `translate(0%, -${percent}%)`;
    case 'right':
      return `translate(${percent}%, 0%)`;
    case 'down':
      return `translate(0%, ${percent}%)`;
    case 'left':
      return `translate(-${percent}%, 0%)`;
    default:
  }
};

/**
 * Slide in/out transform transition
 */
const SlideTransition = ({
  className,
  slideDirection, // eslint-disable-line
  slidePercent, // eslint-disable-line
  timeout,
  ...rest
}) => (
  <div className={className}>
    {console.log('SLIDE:', className, slideDirection, slidePercent, timeout, rest)}
    {/* We must wrap a Transition in a div to absorb the className from glamorous */}
    <CSSTransition
      {...rest}
      classNames="slide"
      timeout={timeout}
    />
  </div>
);

SlideTransition.propTypes = {
  className: PropTypes.string,
  slideDirection: PropTypes.oneOfType([
    PropTypes.oneOf(['up', 'right', 'down', 'left']),
    PropTypes.shape({
      enter: PropTypes.oneOf(['up', 'right', 'down', 'left']),
      exit: PropTypes.oneOf(['up', 'right', 'down', 'left']),
    })
  ]),
  slidePercent: PropTypes.number,
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
SlideTransition.defaultProps = {
  slideDirection: defaultSlide,
  slidePercent: defaultPercent,
  timeout: defaultTimeout
};

export const mapTransitionStyle = ({
  slideDirection,
  slidePercent,
  timeout = defaultTimeout,
}) => {
  const enter = helpers.getEnter(timeout);
  const exit = helpers.getExit(timeout);

  return {
    '& .slide-enter': {
      transform: getTranslate(slideDirection, 'enter', slidePercent)
    },
    '& .slide-enter.slide-enter-active': {
      transform: 'translate(0%, 0%)',
      transition: `transform ${enter}ms ease-in-out`,
    },
    '& .slide-exit': {
      transform: 'translate(0%, 0%)',
    },
    '& .slide-exit.slide-exit-active': {
      transform: getTranslate(slideDirection, 'exit', slidePercent),
      transition: `transform ${exit}ms ease-in-out`,
    },
  };
};

export default glamorous(SlideTransition)(mapTransitionStyle);

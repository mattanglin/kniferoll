import { compose, mapProps, withHandlers, withState } from 'recompose';
/**
 *  HOC that adds focused state to a component.
 *  Uses recompose to provide a component with the following props:
 *  - focused: Boolean of whether the component is focused or not
 *  - onFocus: Function that will set focused to true (will compose with existing onFocus if set)
 *  - onBlur: Function that will set focused to false (will compose with existing onBlur if set)
 */

/**
 * Add focused state and set focus
 */
const withFocusState = withState('focused', 'withFocus__setFocus', false);

/**
 * Add onBlur and onFocus handlers.
 * Will call existing onBlur/onFocus handlers after
 * setting focused state if either are set.
 */
const withFocusHandlers = withHandlers({
  onBlur: ({ onBlur, withFocus__setFocus }) => (...params) => {
    withFocus__setFocus(false);

    // Call existing onBlur if set
    if (typeof onBlur === 'function') {
      onBlur(...params);
    }
  },
  onFocus: ({ onFocus, withFocus__setFocus }) => (...params) => {
    withFocus__setFocus(true);

    // Call existing onFocus if set
    if (typeof onFocus === 'function') {
      onFocus(...params);
    }
  }
});

// Strip the withState setFocus function
const removeSetFocus = mapProps(({ withFocus__setFocus, ...rest}) => rest); // eslint-disable-line

const withFocus = compose(withFocusState, withFocusHandlers, removeSetFocus);

export default withFocus;

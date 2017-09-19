import { compose, mapProps, withHandlers, withState } from 'recompose';
/**
 *  HOC that adds switched state to a component.
 *  Uses recompose to provide a component with the following props:
 *  - switched: Boolean of whether the component is switched or not
 *  - onClick: Function that will toggle switched and pass new value to
 *  onChange function if set. Composes with existing onClick handler if set.
 */

/**
 * Add switched state
 */
const withSwitchState = withState('switched', 'asSwitch__setSwitched', ({ defaultValue }) => defaultValue || false);

/**
 * Add onSwitch handler. Updates hoc switched state and calls
 * onChange function with new value if not disabled.
 */
const withSwitchHandlers = withHandlers({
  onSwitch: ({
    asSwitch__setSwitched,
    disabled,
    onChange,
    onClick,
    switched,
    ...rest
  }) => (...params) => {
    // Only if not disabled
    //
    if (!disabled) {
      const value = ('value' in rest) ? !rest.value : !switched;

      // If onChange, call onChange with opposite value of switched
      if (onChange) {
        onChange(value);
      }
      // Update HOC state
      asSwitch__setSwitched(value);

      // Call onClick if set
      if (onClick) {
        onClick(params);
      }
    }
  }
});

/**
 * remove hoc state handler, map value of hoc state to switched prop.
 */
export const mapSwitchProps = mapProps(({
  asSwitch__setSwitched, // eslint-disable-line
  switched,
  ...rest
}) => ({
  // Check for value otherwise pass switched
  ...rest,
  // Use value if set as prop, otherwise hoc state
  switched: ('value' in rest) ? rest.value : switched
}));

const asSwitch = compose(withSwitchState, withSwitchHandlers, mapSwitchProps);

export default asSwitch;

import { compose, mapProps, withHandlers, withState } from 'recompose';

const withGroupSwitchState = withState('switched', 'asGroupSwitch__setSwitched', ({ defaultSelected }) => defaultSelected || '');

const withGroupSwitchHandlers = withHandlers({
  onSwitch: ({
    asGroupSwitch__setSwitched,
    disabled,
    onChange,
    onClick,
  }) => (value) => {
    // Only if not disabled
    if (disabled !== value) {
      // If onChange, call onChange with opposite value of switched

      if (onChange) {
        onChange(value);
      }
      // Update HOC state
      asGroupSwitch__setSwitched(value);

      // Call onClick if set
      if (onClick) {
        onClick(value);
      }
    }
  }
});

const mapGroupSwitchProps = mapProps(({
  asGroupSwitch__setSwitched, // eslint-disable-line
  ...rest
}) => ({
  ...rest
}));

const asGroupSwitch = compose(withGroupSwitchState, withGroupSwitchHandlers, mapGroupSwitchProps);

export default asGroupSwitch;

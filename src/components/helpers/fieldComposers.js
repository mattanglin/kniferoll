/**
 * A collection of HOC helpers to adapt form components for
 * redux-form Field and FieldArray.
 */
import { mapProps } from 'recompose';

export const fieldInput = mapProps(({ input, meta, ...rest }) => ({
  ...rest,
  error: meta.touched && meta.error,
  ...input,
}));

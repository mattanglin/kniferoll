import { lighten } from 'polished';
import mapThemeStyle from '../helpers/mapThemeStyle';

export const defaultStyle = {
  position: 'relative',
  ':after': {
    bottom: 0,
    backgroundColor: 'black',
    content: '""',
    display: 'block',
    height: '2px',
    left: 0,
    marginLeft: '50%',
    position: 'absolute',
    transition: 'all .2s ease-in-out',
    width: '0%',
  },
  '& textarea': {
    border: '1px solid black',
    borderRadius: 0,
    minWidth: '166px',
    outline: 'none',
    padding: '8px',
    resize: 'none',
    verticalAlign: 'top',
    width: '100%',
    fontSize: '14px',

    '::placeholder': {
      color: lighten(0.5, 'black'),
    },
  },
};

export const style = (props) => ({
  ...defaultStyle,
  ':after': {
    backgroundColor: props.error ? 'crimson' : 'DeepSkyBlue',
    marginLeft: (props.error || props.focused) ? '0%' : '50%',
    width: (props.error || props.focused) ? '100%' : '0%',
  },
  ...mapThemeStyle(props, 'Textarea')
});

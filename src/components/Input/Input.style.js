import resolvePath from 'object-resolve-path';
import { lighten } from 'polished';

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
  '& input': {
    border: '1px solid black',
    borderRadius: 0,
    height: '36px',
    minWidth: '166px',
    outline: 'none',
    padding: '8px',
    width: '100%',
  },
};

export const mapPropsAndThemeToStyle = (props) => ({
  '& input': {
    border: `1px solid ${props.theme.colors.primaryLight}`,
    color: props.theme.colors.primaryLight,
    fontFamily: props.theme.font.baseFamily,
    fontSize: props.theme.font.baseSize,
    '::placeholder': {
      color: lighten(0.3, props.theme.colors.primaryLight),
      fontWeight: 'bold'
    },
  },
  ':after': {
    backgroundColor: props.error ? props.theme.colors.error : props.theme.colors.success,
    marginLeft: (props.error || props.focused) ? '0%' : '50%',
    width: (props.error || props.focused) ? '100%' : '0%',
  },
  ...resolvePath(props, 'theme.Input.css') || {}
});

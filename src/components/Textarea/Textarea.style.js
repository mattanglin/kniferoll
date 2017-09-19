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
  '& textarea': {
    border: '1px solid black',
    borderRadius: 0,
    minWidth: '166px',
    outline: 'none',
    padding: '8px',
    resize: 'none',
    verticalAlign: 'top',
    width: '100%',
  },
};

export const mapPropsAndThemeToStyle = (props, theme) => ({
  '& textarea': {
    border: `1px solid ${theme.colors.primaryLight}`,
    color: theme.colors.primaryLight,
    fontFamily: theme.font.baseFamily,
    fontSize: theme.font.baseSize,
    '::placeholder': {
      color: lighten(0.3, theme.colors.primaryLight),
      fontWeight: 'bold'
    },
  },
  ':after': {
    backgroundColor: props.error ? theme.colors.error : theme.colors.success,
    marginLeft: (props.error || props.focused) ? '0%' : '50%',
    width: (props.error || props.focused) ? '100%' : '0%',
  },
  ...resolvePath(theme, 'Textarea.css') || {}
});

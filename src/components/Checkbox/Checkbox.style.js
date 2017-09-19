import resolvePath from 'object-resolve-path';

export const defaultStyle = {
  '&.checkbox': {
    fontSize: '14px'
  },
  '& .check': {
    margin: '0 10px',
    position: 'relative',
    cursor: 'pointer'
  },
  '& .check .checkbox-unchecked': {
    opacity: 1,
    transition: 'opacity 200ms'
  },
  '& .check .checkbox-checked': {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    transform: 'scale(0)',
    transition: 'transform 200ms ease-in-out,opacity 200ms'
  },
  '& .check.checked .checkbox-unchecked': {
    opacity: 0
  },
  '& .check.checked .checkbox-checked': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '& label, & .check': {
    display: 'inline-block'
  },
};

export const mapPropsAndThemeToStyle = (props, theme) => ({
  ...resolvePath(theme, 'Checkbox.css') || {}
});

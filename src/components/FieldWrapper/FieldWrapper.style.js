import resolvePath from 'object-resolve-path';

export const defaultStyle = {
  '& label': {
    color: 'black',
    fontSize: '12px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textTransform: 'uppercase'
  },
  '& .error': {
    color: 'red',
    fontSize: '12px',
    fontWeight: 'bold',
    marginTop: '8px'
  }
};

export const mapPropsAndThemeToStyle = (props, theme) => ({
  '& label': {
    color: theme.colors.primaryLight
  },
  '& .error': {
    color: theme.colors.error
  },
  ...resolvePath(theme, 'FieldWrapper.css') || {}
});

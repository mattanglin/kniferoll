import mapThemeStyle from '../helpers/mapThemeStyle';

export const defaultStyle = {
  background: 'DeepSkyBlue',
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  cursor: 'pointer',
  color: '#fff',
  display: 'inline-block',
  lineHeight: '32px',
  fontSize: '14px',
  fontWeight: 'bold',
  outline: 0,
  padding: '0 8px',
  textAlign: 'center',

  '&.disabled, &.loading': {
    cursor: 'not-allowed'
  },

  '.disabled': {
    opacity: 0.5
  },
};

export const style = (props) => ({
  ...defaultStyle,
  ...mapThemeStyle(props, 'Button')
});

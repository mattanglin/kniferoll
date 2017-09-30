import mapThemeStyle from '../helpers/mapThemeStyle';

export const defaultStyle = {
  '& .wrapper': {
    backgroundColor: 'rgb(229, 229, 229)',
    borderRadius: '15px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: '30px',
    padding: '2px',
    position: 'relative',
    transition: 'background-color 200ms ease-out',
    width: '50px',
  },
  '& .switch-rail': {
    backgroundColor: '#ffffff',
    borderRadius: '13px',
    height: '26px',
    transition: 'background-color 200ms ease-out',
    width: '46px',
  },
  '& .switch': {
    borderRadius: '13px',
    background: 'white',
    boxShadow: '0 0 1px 0 rgba(0,0,0,.25), 0 4px 11px 0 rgba(0,0,0,.08), -1px 3px 3px 0 rgba(0,0,0,.14)',
    height: '26px',
    left: '2px',
    position: 'absolute',
    top: '2px',
    transform: 'translate(0px, 0)',
    transition: 'transform 200ms ease-out',
    width: '26px',
  },

  '&.on .wrapper, &.on .switch-rail': {
    backgroundColor: 'rgb(76, 217, 100)',
  },
  '&.on .switch': {
    transform: 'translate(20px, 0)'
  },
};

export const style = (props) => ({
  ...defaultStyle,
  ...mapThemeStyle(props, 'Toggle')
});

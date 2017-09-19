import resolvePath from 'object-resolve-path';
import { getEnter, getExit } from '../../transitions/helpers';

export const defaultStyle = {
  '& .overlay': {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    bottom: 0,
    display: 'flex',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 1000
  },
  '& .dialog': {
    backgroundColor: '#ffffff',
    margin: 'auto',
    padding: '15px',
    maxWidth: '90%',
    width: '500px',
  },
  '& .title': {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  '& .content, & .contentchildren': {
    margin: '15px 0'
  },
  '& .actions': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px'
  },
  '& .actions .confirm': {
    marginLeft: 'auto'
  },
  '& .actions button': {
    margin: 0
  }
};

export const mapTransitionsToStyle = ({ timeout = 150 }) => {
  const enter = getEnter(timeout);
  const exit = getExit(timeout);

  return {
    // Fade overlay
    '& .fade-slide-enter': {
      opacity: 0
    },
    '& .fade-slide-enter.fade-slide-enter-active': {
      opacity: 1,
      transition: `opacity ${enter}ms ease-out`,
    },
    '& .fade-slide-exit': {
      opacity: 1
    },
    '& .fade-slide-exit.fade-slide-exit-active': {
      opacity: 0,
      transition: `opacity ${exit}ms ease-in`,
    },
    // Slide dialog window
    '& .fade-slide-enter .dialog': {
      transform: 'translate(0%, -100%)'
    },
    '& .fade-slide-enter.fade-slide-enter-active .dialog': {
      transform: 'translate(0%, 0%)',
      transition: `transform ${enter * (2 / 3)}ms ease-out ${enter / 3}ms`,
    },
    '& .fade-slide-exit .dialog': {
      transform: 'translate(0%, 0%)'
    },
    '& .fade-slide-exit.fade-slide-exit-active .dialog': {
      transform: 'translate(0%, -100%)',
      transition: `transform ${exit * (2 / 3)}ms ease-in`,
    },
  };
};

export const mapPropsAndThemeToStyle = (props, theme) => ({
  '& .dialog': {
    boxShadow: theme.boxShadow,
    padding: `${theme.paddingBase * 15}px`,
  },
  '& .title': {
    fontFamily: theme.font.headerFamily,
    textTransform: 'uppercase',
  },
  ...resolvePath(theme, 'Dialog.css')
});

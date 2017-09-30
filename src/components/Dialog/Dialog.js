import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { compose, lifecycle, withHandlers } from 'recompose';
import glamorous from 'glamorous';
import { Button } from '../../';
import {
  defaultStyle,
  mapTransitionsToStyle,
  mapPropsAndThemeToStyle
} from './Dialog.style';

const addEscKeyHandler = withHandlers({
  escKeyHandler: ({ onEscKeyDown }) => (event) => {
    if (event.which === 27 && onEscKeyDown) onEscKeyDown(event);
  }
});
const attachAndRemoveHandlers = lifecycle({
  componentDidMount() {
    const { escKeyHandler, onEscKeyDown } = this.props;

    if (onEscKeyDown) {
      document.body.addEventListener('keydown', escKeyHandler);
    }
  },
  componentWillMount() {
    const { escKeyHandler, onEscKeyDown } = this.props;

    if (onEscKeyDown) {
      document.body.removeEventListener('keydown', escKeyHandler);
    }
  }
});
const escapable = compose(addEscKeyHandler, attachAndRemoveHandlers);

/**
 * Dialog window for dispaying alerts, messages, confirms, or anything else.
 */
export const Dialog = ({
  cancelText,
  children,
  className,
  confirmText,
  content,
  open,
  onCancel,
  onConfirm,
  onOverlayClick,
  timeout,
  title,
}) => (
  <div className={className}>
    <TransitionGroup>
      {open &&
        <CSSTransition
          timeout={timeout}
          classNames="fade-slide"
        >
          <div
            className="overlay"
            onClick={onOverlayClick}
          >
            <div className="dialog" onClick={(e) => e.stopPropagation()}>
              {title &&
                <div className="title">{title}</div>
              }
              {content &&
                <div className="content">{content}</div>
              }
              {children &&
                <div className="main">{children}</div>
              }
              {/* Only show actions if handlers set */}
              {(onCancel || onConfirm) &&
                <div className="actions">
                  {onCancel &&
                    <Button
                      className="cancel"
                      onClick={onCancel}
                    >
                      {cancelText}
                    </Button>
                  }
                  {onConfirm &&
                    <Button
                      className="confirm"
                      onClick={onConfirm}
                    >
                      {confirmText}
                    </Button>
                  }
                </div>
              }
            </div>
          </div>
        </CSSTransition>
      }
    </TransitionGroup>
  </div>
);

Dialog.propTypes = {
  /**
   * Text for cancel button
   */
  cancelText: PropTypes.string,
  /**
   * Child component(s) to render within the Dialog box
   */
  children: PropTypes.node,
  /**
   * Needed for glamorous styles
   * @ignore
   */
  className: PropTypes.string.isRequired,
  /**
  * Text for confirm button
  */
  confirmText: PropTypes.string,
  /**
   * Text content to display within the Dialog
   */
  content: PropTypes.string,
  /**
  * Cancel button handler. Cancel button will not display if not set.
  */
  onCancel: PropTypes.func,
  /**
  * Confirm button handler. Confirm button will not display if not set.
  */
  onConfirm: PropTypes.func,
  /**
  * Attach function to escape key while mounted.
  * Maybe to CLOSE the Dialog? Perhaps?
  */
  onEscKeyDown: PropTypes.func, // eslint-disable-line
  /**
   * Function to call when clicking outside the Dialog box.
   * Often you will want a function to close the Dialog.
   */
  onOverlayClick: PropTypes.func,
  /**
   * Whether or not the Dialog is open
   */
  open: PropTypes.bool,
  /**
   * Dialog transition timeout. Either integer or object.
   *
   * `{ enter: 300, exit: 100 }`
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ]),
  /**
   * Dialog title text
   */
  title: PropTypes.string,
};
Dialog.defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  open: false,
  timeout: 150
};

export default escapable(
  glamorous(Dialog)(defaultStyle, mapTransitionsToStyle, mapPropsAndThemeToStyle)
);

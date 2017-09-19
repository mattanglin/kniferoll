/**
 * Transition helpers
 */
export const getEnter = (timeout) => timeout.enter || timeout;
export const getExit = (timeout) => timeout.exit || timeout;

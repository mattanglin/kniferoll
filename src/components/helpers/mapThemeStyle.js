import resolvePath from 'object-resolve-path';

const mapThemeStyle = (props, componentName) => (resolvePath(props, `theme.${componentName}`) || {});

export default mapThemeStyle;

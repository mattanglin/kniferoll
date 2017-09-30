/**
 * Helper to get pixels or other measurement
 */
const unitString = (measurement, unit) => `${measurement}${unit}`;

const generateColStyles = (size, columns, gutter, unit) => {
  const columnSizeStyles = {};
  const columnSpecStyles = {};

  // Do we have a media query?

  // Generate column styles...
  const globalColString = Array.from(Array(columns).keys()).reduce((str, i) => {
    const col = i + 1;

    // Add individual column style
    columnSpecStyles[`& .col-${size}-${col}.col-${size}-${col}`] = {
      MsFlexPreferredSize: `${(100 / columns) * col}%`,
      flexBasis: `${(100 / columns) * col}%`,
      maxWidth: `${(100 / columns) * col}%`,
    };

    // Add offsets
    columnSpecStyles[`& .col-${size}-offset-${i}`] = {
      marginLeft: `${(100 / columns) * i}%`,
    };

    return `${str}, & .col-${size}-${col}, & .col-${size}-offset-${col}`;
  }, '');

  // Global column styles
  columnSizeStyles[globalColString] = {
    boxSizing: 'border-box',
    WebkitBoxFlex: '0',
    MsFlex: '0 0 auto',
    flex: '0 0 auto',
    paddingRight: unitString(gutter, unit),
    paddingLeft: unitString(gutter, unit),
  };
  columnSizeStyles[`& .col-${size}`] = {
    WebkitBoxFlex: '1',
    MsFlexpositive: '1',
    flexGrow: '1',
    MsFlexPreferredSize: '0',
    flexBasis: '0',
    maxWidth: '100%',
  };
  columnSizeStyles['& .start-xs'] = {
    WebkitBoxPack: 'start',
    MsFlexPack: 'start',
    justifyContent: 'flex-start',
    textAlign: 'start',
  };
  columnSizeStyles['& .center-xs'] = {
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };
  columnSizeStyles['& .end-xs'] = {
    WebkitBoxPack: 'end',
    MsFlexPack: 'end',
    justifyContent: 'flex-end',
    textAlign: 'end',
  };
  columnSizeStyles['& .top-xs'] = {
    WebkitBoxAlign: 'start',
    MsFlexAlign: 'start',
    alignItems: 'flex-start',
  };
  columnSizeStyles['& .middle-xs'] = {
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
  };
  columnSizeStyles['& .bottom-xs'] = {
    WebkitBoxAlign: 'end',
    MsFlexAlign: 'end',
    alignItems: 'flex-end',
  };
  columnSizeStyles['& .around-xs'] = {
    MsFlexPack: 'distribute',
    justifyContent: 'space-around',
  };
  columnSizeStyles['& .between-xs'] = {
    WebkitBoxPack: 'justify',
    MsFlexPack: 'justify',
    justifyContent: 'space-between',
  };
  columnSizeStyles['& .first-xs'] = {
    WebkitBoxOrdinalGroup: '0',
    MsFlexOrder: '-1',
    order: '-1',
  };
  columnSizeStyles['& .last-xs'] = {
    WebkitBoxOrdinalGroup: '2',
    MsFlexOrder: '1',
    order: '1',
  };

  return {
    ...columnSizeStyles,
    ...columnSpecStyles
  };
};

const generateSizeStyles = (size, columns, gutter, unit, breakpoint) => {
  const styles = generateColStyles(size, columns, gutter, unit);

  if (breakpoint) {
    return {
      [`@media only screen and (min-width: ${unitString(breakpoint, unit)})`]: {
        '.container': {
          width: unitString(breakpoint, unit),
          maxWidth: '100%',
        },
        '.container-fluid': {
          width: 'auto'
        },
        ...styles,
      }
    };
  }

  return styles;
};

/**
 *  Calculate grid styles from props
 */
export const calculateGridStyle = ({
  columns,
  xsBreak,
  smBreak,
  mdBreak,
  // lgBreak,
  padding,
  gutter,
  unit,
}) => {
  // Media queries

  // Grid Style object
  const gridStyles = {
    // Container Styles
    '.container': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.container.container-fluid': {
      paddingLeft: unitString(padding, unit),
      paddingRight: unitString(padding, unit),
    },
    // Row styles
    '& .row': {
      boxSizing: 'border-box',
      display: 'flex',
      WebkitBoxFlex: '0',
      MsFlex: '0 1 auto',
      flex: '0 1 auto',
      WebkitBoxOrient: 'horizontal',
      WebkitBoxDirection: 'normal',
      MsFlexDirection: 'row',
      flexDirection: 'row',
      MsFlexWrap: 'wrap',
      flexWrap: 'wrap',
      marginRight: `-${unitString(padding, unit)}`,
      marginLeft: `-${unitString(padding, unit)}`,
    },
    '& .row.reverse': {
      WebkitBoxOrient: 'horizontal',
      WebkitBoxDirection: 'reverse',
      MsFlexDirection: 'row-reverse',
      flexDirection: 'row-reverse',
    },
  };

  // Column styles
  // TODO Currently hardcoded, but could be dynamic queries?
  const xsStyles = generateSizeStyles('xs', columns, gutter, unit);
  const smStyles = generateSizeStyles('sm', columns, gutter, unit, xsBreak);
  const mdStyles = generateSizeStyles('md', columns, gutter, unit, smBreak);
  const lgStyles = generateSizeStyles('lg', columns, gutter, unit, mdBreak);

  return {
    ...gridStyles,
    ...xsStyles,
    ...smStyles,
    ...mdStyles,
    ...lgStyles,
  };
};

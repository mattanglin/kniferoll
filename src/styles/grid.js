import { css } from 'glamor';

const styles = {
  test: 'result',
  [`.container-fluid,
  .container`]: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '.container-fluid': {
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },

  '.row': {
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
    marginRight: '-0.5rem',
    marginLeft: '-0.5rem',
  },

  '.row.reverse': {
    WebkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'reverse',
    MsFlexDirection: 'row-reverse',
    flexDirection: 'row-reverse',
  },

  '.col.reverse': {
    WebkitBoxOrient: 'vertical',
    WebkitBoxDirection: 'reverse',
    MsFlexDirection: 'column-reverse',
    flexDirection: 'column-reverse',
  },

  [`.col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-0,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12`]: {
    boxSizing: 'border-box',
    WebkitBoxFlex: '0',
    MsFlex: '0 0 auto',
    flex: '0 0 auto',
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
  },

  '.col-xs': {
    WebkitBoxFlex: '1',
    MsFlexpositive: '1',
    flexGrow: '1',
    MsFlexPreferredSize: '0',
    flexBasis: '0',
    maxWidth: '100%',
  },

  '.col-xs-1': {
    MsFlexPreferredSize: '8.33333333%',
    flexBasis: '8.33333333%',
    maxWidth: '8.33333333%',
  },

  '.col-xs-2': {
    MsFlexPreferredSize: '16.66666667%',
    flexBasis: '16.66666667%',
    maxWidth: '16.66666667%',
  },

  '.col-xs-3': {
    MsFlexPreferredSize: '25%',
    flexBasis: '25%',
    maxWidth: '25%',
  },

  '.col-xs-4': {
    MsFlexPreferredSize: '33.33333333%',
    flexBasis: '33.33333333%',
    maxWidth: '33.33333333%',
  },

  '.col-xs-5': {
    MsFlexPreferredSize: '41.66666667%',
    flexBasis: '41.66666667%',
    maxWidth: '41.66666667%',
  },

  '.col-xs-6': {
    MsFlexPreferredSize: '50%',
    flexBasis: '50%',
    maxWidth: '50%',
  },

  '.col-xs-7': {
    MsFlexPreferredSize: '58.33333333%',
    flexBasis: '58.33333333%',
    maxWidth: '58.33333333%',
  },

  '.col-xs-8': {
    MsFlexPreferredSize: '66.66666667%',
    flexBasis: '66.66666667%',
    maxWidth: '66.66666667%',
  },

  '.col-xs-9': {
    MsFlexPreferredSize: '75%',
    flexBasis: '75%',
    maxWidth: '75%',
  },

  '.col-xs-10': {
    MsFlexPreferredSize: '83.33333333%',
    flexBasis: '83.33333333%',
    maxWidth: '83.33333333%',
  },

  '.col-xs-11': {
    MsFlexPreferredSize: '91.66666667%',
    flexBasis: '91.66666667%',
    maxWidth: '91.66666667%',
  },

  '.col-xs-12': {
    MsFlexPreferredSize: '100%',
    flexBasis: '100%',
    maxWidth: '100%',
  },

  '.col-xs-offset-0': {
    marginLeft: '0',
  },

  '.col-xs-offset-1': {
    marginLeft: '8.33333333%',
  },

  '.col-xs-offset-2': {
    marginLeft: '16.66666667%',
  },

  '.col-xs-offset-3': {
    marginLeft: '25%',
  },

  '.col-xs-offset-4': {
    marginLeft: '33.33333333%',
  },

  '.col-xs-offset-5': {
    marginLeft: '41.66666667%',
  },

  '.col-xs-offset-6': {
    marginLeft: '50%',
  },

  '.col-xs-offset-7': {
    marginLeft: '58.33333333%',
  },

  '.col-xs-offset-8': {
    marginLeft: '66.66666667%',
  },

  '.col-xs-offset-9': {
    marginLeft: '75%',
  },

  '.col-xs-offset-10': {
    marginLeft: '83.33333333%',
  },

  '.col-xs-offset-11': {
    marginLeft: '91.66666667%',
  },

  '.start-xs': {
    WebkitBoxPack: 'start',
    MsFlexPack: 'start',
    justifyContent: 'flex-start',
    textAlign: 'start',
  },

  '.center-xs': {
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  '.end-xs': {
    WebkitBoxPack: 'end',
    MsFlexPack: 'end',
    justifyContent: 'flex-end',
    textAlign: 'end',
  },

  '.top-xs': {
    WebkitBoxAlign: 'start',
    MsFlexAlign: 'start',
    alignItems: 'flex-start',
  },

  '.middle-xs': {
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
  },

  '.bottom-xs': {
    WebkitBoxAlign: 'end',
    MsFlexAlign: 'end',
    alignItems: 'flex-end',
  },

  '.around-xs': {
    MsFlexPack: 'distribute',
    justifyContent: 'space-around',
  },

  '.between-xs': {
    WebkitBoxPack: 'justify',
    MsFlexPack: 'justify',
    justifyContent: 'space-between',
  },

  '.first-xs': {
    WebkitBoxOrdinalGroup: '0',
    MsFlexOrder: '-1',
    order: '-1',
  },

  '.last-xs': {
    WebkitBoxOrdinalGroup: '2',
    MsFlexOrder: '1',
    order: '1',
  }
};


// Add grid styles
Object.keys(styles).forEach((selector) => {
  const style = styles[selector];

  css.global(selector, style);
});

// Add Media Queries
// NOTE: Due to limitations of the glamor engine not
// providing support for global media queries we
// must insert media queries as string literals to
// avoid console warnings and have them applied.
const mediaQueries = [
  `@media only screen and (min-width: 48em) {
    .container {
      width: 49rem;
    }

    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-0,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-sm {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-sm-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-sm-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-sm-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-sm-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-sm-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-sm-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-sm-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-sm-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-sm-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-sm-offset-0 {
      margin-left: 0;
    }

    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-sm-offset-3 {
      margin-left: 25%;
    }

    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-sm-offset-6 {
      margin-left: 50%;
    }

    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-sm-offset-9 {
      margin-left: 75%;
    }

    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-sm {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-sm {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-sm {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-sm {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-sm {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-sm {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-sm {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-sm {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-sm {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-sm {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }`,

  `@media only screen and (min-width: 64em) {
    .container {
      width: 65rem;
    }

    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-0,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-md {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-md-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-md-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-md-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-md-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-md-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-md-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-md-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-md-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-md-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-md-offset-0 {
      margin-left: 0;
    }

    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-md-offset-3 {
      margin-left: 25%;
    }

    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-md-offset-6 {
      margin-left: 50%;
    }

    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-md-offset-9 {
      margin-left: 75%;
    }

    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-md {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-md {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-md {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-md {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-md {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-md {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-md {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-md {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-md {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-md {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }`,

  `@media only screen and (min-width: 75em) {
    .container {
      width: 76rem;
    }

    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-0,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-lg {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-lg-1 {
      -ms-flex-preferred-size: 8.33333333%;
      flex-basis: 8.33333333%;
      max-width: 8.33333333%;
    }

    .col-lg-2 {
      -ms-flex-preferred-size: 16.66666667%;
      flex-basis: 16.66666667%;
      max-width: 16.66666667%;
    }

    .col-lg-3 {
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      -ms-flex-preferred-size: 33.33333333%;
      flex-basis: 33.33333333%;
      max-width: 33.33333333%;
    }

    .col-lg-5 {
      -ms-flex-preferred-size: 41.66666667%;
      flex-basis: 41.66666667%;
      max-width: 41.66666667%;
    }

    .col-lg-6 {
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      -ms-flex-preferred-size: 58.33333333%;
      flex-basis: 58.33333333%;
      max-width: 58.33333333%;
    }

    .col-lg-8 {
      -ms-flex-preferred-size: 66.66666667%;
      flex-basis: 66.66666667%;
      max-width: 66.66666667%;
    }

    .col-lg-9 {
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      -ms-flex-preferred-size: 83.33333333%;
      flex-basis: 83.33333333%;
      max-width: 83.33333333%;
    }

    .col-lg-11 {
      -ms-flex-preferred-size: 91.66666667%;
      flex-basis: 91.66666667%;
      max-width: 91.66666667%;
    }

    .col-lg-12 {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-lg-offset-0 {
      margin-left: 0;
    }

    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }

    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }

    .col-lg-offset-3 {
      margin-left: 25%;
    }

    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }

    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }

    .col-lg-offset-6 {
      margin-left: 50%;
    }

    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }

    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }

    .col-lg-offset-9 {
      margin-left: 75%;
    }

    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }

    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }

    .start-lg {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-lg {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-lg {
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-lg {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-lg {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-lg {
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-lg {
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-lg {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-lg {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-lg {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
    }
  }`
];

// Insert media queries one by one to avoid production issues:
// https://github.com/threepointone/glamor/issues/130
// Track better usage in the following issue:
// https://github.com/threepointone/glamor/issues/202
mediaQueries.forEach((mediaQuery) => css.insert(mediaQuery));

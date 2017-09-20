const path = require('path');
const webpackConfig = require('./webpack/dev.config.js');

webpackConfig.resolve = {
  alias: {
    'rsg-components/Wrapper': path.join(__dirname, 'src/Wrapper/index.js')
  },
  extensions: ['.js', '.jsx']
};

module.exports = {
  title: 'Knife Roll',
  showUsage: true,
  context: {
    // Add globals used in component examples here
  },
  require: [
    // Load Fonts and styles for styleguide
    path.resolve(__dirname, 'src/fonts/index.js'),
    path.resolve(__dirname, 'src/styles/index.js'),
  ],
  sections: [
    {
      name: 'Overview',
      content: path.resolve(__dirname, 'src/Intro.md')
    },
    {
      name: 'Grid System',
      content: path.resolve(__dirname, 'src/grid/GridSystem.md'),
      components: () => [
        path.resolve(__dirname, 'src/grid/Grid.js'),
        path.resolve(__dirname, 'src/grid/Row.js'),
        path.resolve(__dirname, 'src/grid/Col.js'),
      ]
    },
    // {
    //   name: 'Fonts',
    //   content: path.resolve(__dirname, 'src/fonts/Fonts.md')
    // },
    {
      name: 'Styles',
      content: path.resolve(__dirname, 'src/styles/Styles.md')
    },
    // {
    //   name: 'Themes',
    //   content: path.resolve(__dirname, 'src/themes/Themes.md')
    // },
    {
      name: 'Components',
      content: path.resolve(__dirname, 'src/components/Components.md'),
      sections: [
        {
          name: 'Notifications',
          components: () => [
            path.resolve(__dirname, 'src/components/Dialog/Dialog.js'),
          ]
        },
        {
          name: 'Forms',
          components: () => [
            path.resolve(__dirname, 'src/components/Input/Input.js'),
            path.resolve(__dirname, 'src/components/Textarea/Textarea.js'),
            path.resolve(__dirname, 'src/components/Checkbox/Checkbox.js'),
          ]
        }
      ],
    },
  ],
  styleguideDir: 'docs',
  webpackConfig,
  // Custom Styleguide Theme
  theme: {
    // fontFamily: {
    //   base: 'Helvetica'
    // }
  },
  // Custom Styleguide styles
  styles: {
    // Logo: {
    //   logo: {
    //     fontFamily: 'Helvetica'
    //   }
    // }
  },
  // Custom styleguide components
  styleguideComponents: {
    // Logo: path/to/LogoComponent,
    // StyleGuideRenderer: path/to/StyleGuideRendererComponent
  }
};

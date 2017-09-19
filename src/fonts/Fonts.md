Kniferoll provides a variety of fonts and font icon sets for use in your applications.
The following fonts are currently available:
 - [Font Awesome Icons](http://fontawesome.io/icons/)


__NOTE:__ Kniferoll is setup to load fonts with webpack [file-loader](https://github.com/webpack-contrib/file-loader) and [url-loader](https://github.com/webpack-contrib/url-loader). They will not work correctly without these loaders in your webpack config.


__Example Webpack config for fonts:__
```javascript
module.exports = {
  ...
  module: {
    loaders: [
      // Font file loaders
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  ...
};

```

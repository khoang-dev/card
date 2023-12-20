// webpack.config.js
module.exports = {
    // ... other configurations ...
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.vue'],
    },
  };
  
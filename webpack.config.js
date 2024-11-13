import webpack from 'webpack';

plugins:[
    new webpack.DefinePlugin({
        process: {env: {}}
    })
  ]

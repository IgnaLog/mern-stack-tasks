module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};

// const path = require('path');

// module.exports = {
//   // APP ENTRY POINT
//   entry: path.join(__dirname, 'src', 'index.js'),

//   // OUTPUT DIRECTORY
//   output: {
//     path: __dirname + '/src/public',
//     filename: 'bundle.js'
//   },
//   // LOADERS
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   }
// };
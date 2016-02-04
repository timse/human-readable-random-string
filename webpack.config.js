var path = require('path');

module.exports = {
    entry: {
        hrrs: './index.js'
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        library: "hrrs",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: 'babel'
            }
        ]
    }
};

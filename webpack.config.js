const path = require('path');

module.exports = {
    entry: {
        test: './src/test.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                parser: {
                    amd: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve(__dirname, "./src/js"),
            path.resolve(__dirname, "./src"),
            "node_modules",
            path.resolve(__dirname, "./")
        ],
    }
};
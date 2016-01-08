module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, loader: 'jsx-loader?harmony' }
        ]
    },
    resolve: {
      extendsions: ['', '.js', 'jsx', '.json']
    }
};

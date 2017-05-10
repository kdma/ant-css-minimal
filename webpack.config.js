const path = require('path');

const config = {
    entry: "./src/Index.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "babel-loader!ts-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
};

module.exports = config;

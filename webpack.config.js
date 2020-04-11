module.exports = {
    entry: './main.js',
    // output: {
    //     path: __dirname,
    //     file: 'bundle.js'
    // },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            }
        ],
    },
};
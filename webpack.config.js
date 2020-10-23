const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "build.js"
    },
    devServer: {
        port: 9000,
        open: true,
        contentBase: './src'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: 'css/[id].css'
        }),
        new cleanWebpackPlugin()
    ],
    module: {
        rules: [{
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}


// url-loader 可以识别图片的大小，然后把图片转换成base64，从而减少代码的体积，如果图片超过设定的现在，就还是用 file-loader来处理。如果不在乎体积，不想转换成base64，可以不要配这个loader。
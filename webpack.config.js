const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // 虚拟打包路径，说是文件夹不会真正生成
        // publichpath: path.resolve(__dirname, 'dist'),
        publicPath: 'xuni',
        filename: 'bundle.js',
    },
    devServer: {
        // 静态资源文件夹
        port: 8080,
        contentBase: 'www',
    },
};

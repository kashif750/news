const path=require('path');
const {merge}=require('webpack-merge');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const common=require('./common');

module.exports=merge(common,{
    mode:'production',
    output:{
        filename:'application.js',
        publicPath:'./',
        path:path.resolve('dist'),
        chunkFilename:'vendor-[id]-[contenthash].js'
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
});
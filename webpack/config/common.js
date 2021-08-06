const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={

    entry:'./src/index.js',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },{
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'react application',
            template:'./webpack/template/index.html',
            inject:'head'
        })
    ]
    
}
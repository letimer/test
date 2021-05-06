const path=require("path");
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')

module.exports={
    //入口文件
    entry:"./src/main.js",
    //出口文件
    output:{
        //动态获取该路径
        //__dirname是一个全局变量:保存着该文件的当前路径
        //resolve起一个拼接作用，使得其当前路劲加上dist等实现动态获取绝对路径
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        //publicPath:"dist/"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                //css-loader只负责将css文件加载
                //style-loader负责将样式添加到dom当中
                //使用多个Loader时，是从右向左的
                use:["style-loader","css-loader"]
            },
            {
                test:/\.less$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:"less-loader"
                }]
            },{
                test:/\.(png|jpg|gif|jpeg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            //当加载的图片小于Limit，则图片会编译成base64字符串形式
                            //当加载的图片大于limit,则需要使用file-loader模块进行加载
                            limit:26000,
                            name:'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },{
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['es2015']
                    }
                }
            },{
                test:/\.vue$/,
                //exclude:排除
                //include：包含
                use:['vue-loader']
            }
        ]
    },
    resolve:{
        //alias别名
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归mortimer所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        //丑化，开发时不需要，发布时需要
        //new UglifyjsWebpackPlugin()
    ],
    devServer:{
        //因为用于服务dist这个文件夹
        contentBase:'./dist',
        //是否监听
        inline:true
        //端口可以选择也可以默认
    }
}

// 本地安装：
// npm install webpack@3.6.0 --save-dev
// 1 --save-dev是开发时依赖，项目打包后不再继续使用。
// 2 只要是在终端里敲命令都是执行的全局的webpack。
// 3 在package里配置命令映射则优先执行的是本地的webpack。除非写路径

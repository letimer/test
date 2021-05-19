webpack内容概述
一.认识webpack

什么是webpack?
官方解释：
   本质上来说，webpack是一个现代的javascript应用的静态模块打包工具
从模块和打包上来解释：
webpack模块化理念：webpack其中一个核心就是让我们可能进行模块化开发，并且帮助我们处理模块间的依赖关系，
而且不仅仅是Javascript文件，我们的css，图片，json文件等等在webpack中都可以被当作模块来使用。
打包：打包是指将一大堆文件或目录什么的变成一个总的文件

二.webpack的安装
  webpack为了可以正常运行，必须依赖node环境，node环境(npm里面有很多包)为了可以正常的执行很多代码，必须
其中包含各种依赖的包管理工具npm（node packages manager）安装webpack首先需要安装node.js,node.js自带了
软件包管理工具npm
1.查看自己的node版本
2.全局安装webpack(指定版本号为3.6.0,因为vue.cli2依赖该版本)
安装好webpack之后查看其版本

三.webpack的使用起步
简单介绍：
   1.dist:用来存放之后打包的文件
   2.src:用于存放我们写的源文件
          main.js:项目的入口文件，详情在上面
          mathUtils.js定义了一些数学工具函数，可以再其它地方引用并且使用，具体看上面
   3.index.html:浏览器打开展示的首页html
   4.package.json:通过npm init生成的，npm包管理的文件
注意：main.js和mathUtils.js存在依赖关系，但是打包时webpack都会把这些关系处理好放在dist中
webpack ./src/main.js  ./dist/bundle.js     (解释为：将src中的main.js文件打包放在dist中的bundle.js中（这个bundle.js是打包时自动创建的）)

四.webpack的配置
webpack.config.js配置:由自己创建，文件内部代码如下
package.json配置：包描述文件，由npm init自动生成，在下列代码中加入"build":"webpack"，可以使得直接终端输入npm run build就相当于直接运行webpack...   ...
注意：因为之前在安装webpack的时候是全局安装，所以可能会版本冲突，因此需要本地安装一下webpack，会在json文件中生成依赖

五.loader的使用
loader是webpack中一个非常核心的概念
webpack用途
在我们之前的实例中，我们主要用webpack来处理我们写的js代码，并且webpack会自动处理js之间相关的依赖。
但是在开发当中，我们不仅仅有基本的js代码处理，我们也需要加载css，图片,也包括一些高级的将es6转成es5代码，
将ts转为es5等，对于webpack本身的能力来说，这些转化是不支持的，解决方法：给webpack扩展对应的loader。
loader的使用过程：
1.通过npm安装需要使用的loader;
2,在webpack.config.js中的moudles关键字下进行配置；

5.1webpack中使用css文件的处理
准备工作：
1.通过npm安装需要使用的loader;
npm install --save-dev css-loader
2,在webpack.config.js中的moudles关键字下进行配置
注意：光是这样配置只会使得其运行npm run build时不会报错，但是样式不会改变，还需要安装以下的东西，使得该模块进行导出，再在module关键字下进行配置
还要在入口文件当中添加一个对css文件的依赖:require("xxx.css");

5.2webpack-less文件的处理
如果我们希望在项目当中使用Less,scss,stylus来写样式，webpack是否可以帮助我们呢？
在下面以less为例，其它的也是一样
准备工作：
1.先创建一个les文件，依然放在css文件夹当中
less文件
入口文件：
2.npm install --save-dev less-loader less
包描述文件：
5.3webpack中使用图片文件的处理
使用url-loader和file-loader
注意：当加载的图片小于limit的数值，会将图片转换成base64格式，如果大于，则会使用file-loader（file-loader只需要安装，不需要配置）
1.npm install --save-dev url-loader
2.在webpack.config.js中配置

5.4ES6语法处理——ES6转ES5的babel
如果我们希望将es6的语法转成es5，那么就需要使用babel，在webpack当中，我们直接使用babel对应的loader就可以了
1.npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
2.配置相关文件

6.2 .vue文件封装处理——vue的终极处理方案
以一个组件一个js对象的形式进行组织和使用是非常不方便的，所以我们以一个全新的方式来组织一个Vue组件
步骤：
1.安装vue-loader和vue-template-compiler
2.修改webpack.config.js的配置文件

App.vue：  
<template>
    <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
    </div>
  </template>
  <script>
      import Cpn from "./Cpn.vue"
      export default{
          name:'App',
          components:{
              Cpn
          },
           data(){
            return {
            message:"hello webpack",
            name:"coderwhy"
            }
    },
    methods:{
        btnClick(){}
    }
      }
  </script>
  <style scoped>
      .title{
          color:green;
      }
  </style>


Cpn.vue：
  <template>
    <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
    <h2>{{name}}</h2>
    </div>
  </template>
  <script>
      export default{
        name:'Cpn',
        data(){
           return {
                name:"CPN组件的name"
           }
        }
    }
  </script>
  <style scoped>
  </style>

入口文件：
//5.使用vue进行开发
import Vue from 'vue'
import App from "./vue/App.vue"
new Vue({
    el:"#app",
    template:'<App/>',
    components:{
        App
    }

七.plugin的使用

7.1plugin基本知识了解
7.1.1plugin是什么？
plugin是插件的意思，通常是用于对某个现有的架构进行扩展
webpack中的插件，就是对webpack现有的功能的各种扩展，比如打包优化，文件压缩等。
7.1.2plugin和loader的区别
loader主要用于转换某些类型的模块，它是一个转换器，plugin是插件，他是对webpack本身的扩展，是一个扩展器。
7.1.3Plugin的使用过程
步骤1：通过npm安装需要使用的plugins（某些webpack已经内置的插件不需要安装）
步骤2：在webpack.config.js中的plugins中配置插件

7.2基本的插件plugin使用
7.2.1添加版权的plugin——BannerPlugin，属于webpack自带的插件，所以在文件中配置如下所示：
在bundle.js中展示效果：
7.2.2打包html的plugin——HtmlWebpackPlugin
目前，我们的Index.html文件是存放在项目的根目录下面的，在真实发布项目时，发布的是dist文件夹中的内容，但是
dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了，所以如果需要把Index.html文件打包到
dist文件夹中，这个时候就可以使用该plugin了。
作用：自动生成一个index.html文件（指定模板来生成），将打包的js文件，自动通过script标签插入到body当中。
使用步骤：
1.安装：npm install html-webpack-plugin --save-dev
2.进行配置：另外，我们需要删除之前在output中添加的publicPath属性，否则插入的script标签中的src可能会有问题。
dist文件夹下的打包好的Index.html文件


脚手架——Vue Cli

简要介绍
在开发大型项目，那么我们需要使用脚手架，因为我们要考虑代码目录结构，项目结构和部署，热加载，代码单元测试等事情。
如果每个项目都要手动完成这些工作，那么无疑效率低下，所以我们通过使用一些脚手架工具来帮助完成这些事情。

cli是什么意思：
命令行界面，俗称脚手架，使用vue-cli可以快速搭建Vue开发环境以及对应的webpack配置。
相关信息查看官网



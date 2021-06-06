        //css模块化
        //前端模块化是大势所趋，css模块化之前可以利用模块化来解决什么问题：样式私有化，避免被其它样式文件污染，可复用
        // 三种模块化方式：
        // 通过每个页面根节点唯一类名，然后加上css后代选择器的方式来实现私有样式
        // vue中的scoped:通过给每个模块生成唯一的属性值，然后将属性值添加到每个dom节点上，配合css属性选择器来实现私有样式
        // 开启css-loader的modules,使用css modules方案，不仅能实现样式的私有化，还能有效避免被其它样式文件干扰

        //css布局
        //1.table表格布局
        //2.display(确定元素的显示类型block,inline,inline-block)/position(确定位置（static,relative...）)
        //3.flexbox布局(未大范围支持，兼容性不好)

        //4.float布局（元素浮动，脱离文档流，但是不脱离文本流，适配性最好）
        //清除浮动是为了解决父元素因为子级元素浮动引起内部高度为0的问题
        //1.父级添加overflow方法，可以通过触发BFC的方式，实现清除浮动
        //2.使用:after伪元素
        //3.使用before和after双为元素清除浮动
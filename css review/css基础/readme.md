## css一些基本注意事项
### 优先级问题
1.内联样式(inline)>内部样式>外部样式>浏览器默认样式（注意：如果外部样式表在内部样式后面，那么外部会将内部覆盖）

2.当权值相等时，后面出现的样式设置要比之前的样式设置优先级更高

内联样式(1000) > id 选择器(100) > 类选择器(10) = 伪类选择器 = 属性选择器 > 标签选择器(1) = 伪元素选择器
### backgrounds背景
属性名可以为：background-color/image/repeat/attachment(fixed,auto...)/position该些顺序可以简写为background

### 
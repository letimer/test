## 1.flex意味弹性布局，给盒状模型提供最大的灵活性

任何一个容器都可以指定为flex布局，设置为flex元素之后，其float,clear等熟悉将失效

## 2.六个属性设置在容器上

flex-direction:row|row-reverse|column|column-reverse(决定主轴方向)

flex-wrap:nowrap|wrap|wrap-reverse(是否换行)

flex-flow(是flex-direction和flex-wrap的简写形式)

justify-content:flex-start | flex-end | center | space-between | space-around(在主轴上的对齐方式)

align-items：flex-start | flex-end | center | baseline（文字基准线在同一水平） | stretch（在交叉轴上的对齐方式）

align-content：flex-start | flex-end | center | space-between | space-around | stretch（多根轴线对齐方式）

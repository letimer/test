## 1.flex意味弹性布局，给盒状模型提供最大的灵活性

任何一个容器都可以指定为flex布局，设置为flex元素之后，其float,clear等熟悉将失效

## 2.容器的六个属性

flex-direction:row|row-reverse|column|column-reverse(决定主轴方向)

flex-wrap:nowrap|wrap|wrap-reverse(是否换行)

flex-flow(是flex-direction和flex-wrap的简写形式)

justify-content:flex-start | flex-end | center | space-between | space-around(在主轴上的对齐方式)

align-items：flex-start | flex-end | center | baseline（文字基准线在同一水平） | stretch（在交叉轴上的对齐方式）

align-content：flex-start | flex-end | center | space-between | space-around | stretch（多根轴线对齐方式）

## 3.项目的三个属性

order:定义项目的排列顺序，越小越前

flex-grow：定义项目的放大比例，默认为0，即使有空间剩余，也不放大

flex-shrink：定义了项目的缩小比例

flex-basis：属性定义了在分配多余空间之前，项目占据的主轴空间

flex：flex-grow,flex-shrink,flex-basis的简写，auto（1 1 auto）,none(0 0 auto)

align-self: auto | flex-start | flex-end | center | baseline | stretch(单个项目的对齐方式)


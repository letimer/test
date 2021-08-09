### 渐变（径向渐变和线性渐变）
background-image:liner-gradient(direction(to right)/angle(0deg上到下，90左到右),color1,color2)

background-image: radial-gradient(shape size at position, start-color, ..., last-color);

### 过渡
transition: property(属性) duration(过渡时间) timing-function(过渡方式) delay(延迟时间);

过渡的js语法ep：object.style.transition="width 2s"

### 动画animation: myfirst 5s linear 2s infinite alternate;
@keyframes规则是创建动画，规则内使用css样式和动画将逐步从目前样式转换为新的样式
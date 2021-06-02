
     //  安恒笔试篇

        //2. var str="a"+'b'+ +'c';
        //输出为abNaN(两个+使得其转换为数字，所以是abNaN)
        console.log("a"+'b'+ +'c');

        //3.XSS攻击得预防方式(与cookie有关)


        //4.KMP算法匹配

        //6.结果为[empty*3]
        console.log(new Array(3));
        //结果为1,2,3,empty,4
        console.log([1,2,3,,4]);

        //8.结果为0
        console.log(Number(null));

        //9.结果为1,异或，同为0，不同为1
        console.log(0^1);


    // 填空题 
        //1.toString
        //特殊类型：undefined和null没有toString()方法
        //布尔型：数据true和false返回对应的’true’和’false’
        //字符串:类型原值返回
        //数值类型:情况较复杂(NAN,INFINITY，小数和整数)
             //1、正浮点数及NaN、Infinity加引号返回 
             //2、负浮点数或加’+'号的正浮点数直接跟上.toString()，相当于先运行toString()方法，再添加正负号，转换为数字
             //3、整数直接跟上.toString()形式，会报错，提示无效标记，因为整数后的点会被识别为小数点
        //对象Object类型及自定义对象类型 加括号 返回[object Object]
        //数组Array类型返回由数组中每个值的 字符串形式拼接 而成的一个以逗号分隔的字符串
        // 所以[].toString()为''

        //2.输出{a:10}
        var a={};
        (function b(a){
            a.a=10;
            a=null;
        })(a);
        console.log(a);

        //4.user-scalable="no"：表示用户是否可以手动进行缩放

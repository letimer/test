        // 普通函数和箭头函数的区别
        // 1.箭头函数不绑定this
        // 2.箭头函数不能用于构造函数
        // 3.箭头函数没有prototype属性
        // 4.箭头函数不绑定arguments
        // 5.箭头函数无法使用call()和apply()来改变作用域

        //1.基本用法
        let fn=v=>v+v;
        console.log(fn(3));

        //2.箭头函数不能使用于构造函数
        var Box=age=>{
            this.myAge=age;
        }
        var obj=new Box(20);
        //会报错提示Box is not a constructor
        console.log(obj.age);


        //3.箭头函数没有prototype属性
        var Foo=()=>{};
        console.log(Foo.prototype);

        //4.箭头函数不绑定arguments
        let fn1=()=>{
            console.log(arguments);
        }
        fn1(1,2,3);

        //5.箭头函数不绑定this
        window.color="red";
        let color="green";
        let obj={
            color:"blue",
            getColor:()=>{
                //this指向window,red
                console.log(this.color);
                return this.color
            }
        }
        let sayColor=()=>{
            //this指向window,red
            console.log(this.color);
            return this.color;
        }
        obj.getColor();
        sayColor();

        //6.箭头函数无法使用call()和apply()来改变其运行的作用域
        window.color="red";
        let color="green";
        let obj={
            color:"blue"
        };
        let sayColor=()=>{
            console.log(this.color);
        }
        //即使用了apply,其输出还是red
        sayColor.apply(obj);

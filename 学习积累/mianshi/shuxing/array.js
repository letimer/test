
       //1.instanceof操作符
       let arr=[];
       console.log(arr instanceof Array);

      //2.Array.isArray
      let arr=[];
      console.log(Array.isArray(arr));

      //3.Object.prototype.toString-Array基础于Object，但是tostring重写了
      let arr=[];
      console.log(Object.prototype.toString.call(arr)==='[object Array]');

      //4.利用对象构造函数的constructor-object的每个实例都有构造函数的constructor
      //用于保存创建当前对象的函数
      let arr=[];
      console.log(arr.constructor===Array);

      //5.Array原型链上的isPrototypeOf-判断一个对象是否在另一个对象的原型链上
      let arr=[];
      console.log(Array.prototype.isPrototypeOf(arr));

      //6.Object.getPrototypeOf-返回指定对象的原型
      let arr=[];
      console.log(Object.getPrototypeOf(arr)===Array.prototype);

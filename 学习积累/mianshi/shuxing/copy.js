        //拷贝：就是赋值，把一个变量赋值给另外一个变量（把变量赋值给另外一个变量，把一个对象的值赋给另外一个对象）
        //基本类：存在栈当中，所以没有所谓的深浅拷贝问题
        //引用类型：
        //1.浅拷贝：赋的是值地址或者说引用（引用类型变量在内存中保存的内容）
        //2.深拷贝：创建一个新的数组和对象，将原对象的各种属性的值拷贝过来，是值，而不是引用
        //实现深拷贝的方法：JSON,自定义函数，当对象只有一级属性时，还可以用slice,boject.assign,concat

        //1.自定义函数
        var p={
            "id":"007",
            "name":"刘德华",
            "books":new Array('三国演义','红楼梦','水浒传')
        }
        var p2={};
        for(let key in p){
            p2[key]=p[key];
        }
        p2.books[0]='四国'
        console.log(p);

        //深拷贝（初步）
        var p={
            "id":"007",
            "name":"刘德华",
            "books":new Array('三国演义','红楼梦','水浒传')
        }
        var p2={};
        for(let key in p){
            if(typeof p[key]=='object'){
                p2[key]=[];
                for(let i in p[key]){
                    p2[key][i]=p[key][i]
                }
            }else{
                p2[key]=p[key]
            }
        }
        p2.books[0]='四国';
        //输出结果中p2.books[o]为四国
        console.log(p2);
        //输出结果中p2.books[o]为三国演义
        console.log(p);


        //深拷贝（最终）
        var p={
            "id":"007",
            "name":"刘德华",
            "wife":{
                "id":"008",
                "name":"刘德华的妻子",
                "address":{
                    "city":"北京",
                    "area":"海淀区"
                }
            }
        }
        //写函数
        function copyObj(obj){
            let newObj={};
            for(let key in obj){
                if(typeof obj[key]=="object"){
                    //如key是wife引用类型，所以使用递归
                    newObj[key]=copyObj(obj[key])
                }else{
                    //基本类型的话则直接赋值
                    newObj[key]=obj[key]
                }
            }
            return newObj;
        }

        //2.JSON
        function deep(obj){
            var newobj=JSON.stringify(obj);
            var copyobj=JSON.parse(newobj);
            return copyobj
        }

        //3.Object.assign
        var obj={a:1,b:2}
        var copyobj=Object.assign({},obj)
        console.log(copyobj);

        //4.concat
        var arr=[1,2,3]
        var newarr=[].concat(arr)
        console.log(newarr);

        //5.slice
        var arr=[1,2,3]
        var newarr=arr.slice(0)
        console.log(newarr);



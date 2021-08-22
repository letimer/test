const Controller=require('egg').Controller;

class ProductController extends Controller{
    async index(){
        // ctx用来存放请求的一些信息，是一个由框架产生的上下文
        const {ctx}=this;
        ctx.body="product";
    }
}
module.exports=ProductController;
export default {
    //context上下文
    // aupdateinfos(context,payload){
    //     setTimeout(()=>{
    //        context.commit('updateinfos')
    //        console.log(payload.message); 
    //        payload.success()
    //     },1000)
    // }

    aupdateinfos(context,payload) {
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            context.commit('updateinfos'),
            console.log(payload);
            // resolve('1111')
          },1000)
        })
      }
    }
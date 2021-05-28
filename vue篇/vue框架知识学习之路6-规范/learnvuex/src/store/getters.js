export default {
    powerCount(state){
        return state.counter*state.counter;
    },
     more20stu(state){
        return state.students.filter(s=>s.age>20)
   },
   //该传入的geeters方便我们拿其它的东西
   more20stulen(state,getters){
       return getters.more20stu.length
   },
   moreAgeStu(state){
       return function(age){
         return state.students.filter(s=>s.age>age)
       }
   }
}
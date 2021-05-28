export default {
    state:{
        name:"modulea"
    },
    mutations:{
        mupdatename(state,payload){
            state.name=payload
        }
    },
    actions:{
        aupdatenames(context){
            setTimeout(()=>{
                context.commit('mupdatename','wagwu')
            })
        }
    },
    getters:{
        fullname1(state){
            return state.name+"111"
        },
        fullname2(state,getters){
            return getters.fullname1+"222"
        },
        //rootState指的是store中的state
        fullname3(state,getters,rootState){
            return getters.fullname2+rootState.counter

        }
    }
}
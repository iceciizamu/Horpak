// มีสโตเอาไว้เก็บค่า เช่น register มันมี 2 หน้า ก้เลยต้องมีการเก็บหน้าไว้ก่อน
export const state = () => ({
     line: {
         pictureUrl: null,
         diaplayName:null,
         userId:null

     }
    })
// register:{
//     idcard:'',
// }
// })


 export const getters ={
    getLine(state){
        return state.line
    }

 }
 export const mutations={
     SET_LINE(state, data){
         state.line ={
             ...state.line,
             ...data
         }
     }
 }
 export const actions ={
     setLine({ commit},data){
         commit('SET_LINE' ,data)
     }
 }



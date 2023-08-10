
import { ADD_TODO ,DELETE,REMOVE_TODO} from "./actionTypes";

export const addtodo = (data)=>{
  return{
    type:ADD_TODO,
    payload:{
        id:new Date().getTime().toString(),
        data:data
    }
  }
}

export const deletetodo = (id)=>{
    return{
        type:DELETE,
        id
    }
}

export const removetodo =()=>{
    return{
        type:REMOVE_TODO
    }
}
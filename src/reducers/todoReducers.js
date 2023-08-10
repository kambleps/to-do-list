import { ADD_TODO,DELETE,REMOVE_TODO } from "../action/actionTypes";

const initial_state={
    list:[]
}

const todoReducers =(state=initial_state,action)=>{
  switch(action.type){
    case ADD_TODO:
        const {id,data} = action.payload;
        return {...state,list:[...state.list,{id:id,data:data}]};
    case DELETE:
        const newList = state.list.filter((elem)=>elem.id !== action.id);
        return {...state,list:newList};
    case REMOVE_TODO:
        return {...state,list:[]};
    default :
        return state;
  }
}

export default todoReducers;
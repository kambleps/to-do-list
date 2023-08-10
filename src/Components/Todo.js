import React,{useState} from 'react'
import {useDispatch ,useSelector} from "react-redux";
import { addtodo , deletetodo ,removetodo} from '../action/todoAction';

const Todo = () => {
    let[inputData,setInputdata] = useState("");
    console.log(inputData)
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.list)
  return (
    <div className='main'>
      <div className='first-child'>
      <input type='text' className='input-field' placeholder='Add your list......' 
      value={inputData} onChange={(e)=>setInputdata(e.target.value)}></input>
      <button onClick={()=>dispatch(addtodo(inputData),setInputdata(""))} >Add ToDo</button>
      </div>
      <div className='second-child'>
      {
        list.map((value)=>{
            return(
                <div key={value.id} className='show'>
                    <p>{value.data}</p>
                    <button onClick={()=>dispatch(deletetodo(value.id))}>Delete</button>
                </div>
            )
        })
      }
      </div>
      <div>
      <button onClick={()=>dispatch(removetodo())} className='btn'>REMOVE LIST</button>
      </div>
    </div>
  )
}

export default Todo;

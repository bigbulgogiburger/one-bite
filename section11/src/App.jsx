import './App.css'
import { useState,useRef,useReducer,useCallback,createContext } from 'react'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
// import Exam from './components/Exam'

const mockData = [
    {
      id:0,
      isDone: false,
      content: "react",
      date: new Date().getTime(),
    },
        {
      id:1,
      isDone: false,
      content: "빨래하기",
      date: new Date().getTime(),
    },
        {
      id:2,
      isDone: false,
      content: "노래하기",
      date: new Date().getTime(),
    }
  ];

function reducer(state, action){

  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>item.id === action.targetId? 
      {...item,isDone: !item.isDone}:item);
    case "DELETE":
      return state.filter((item)=> item.id !== action.targetId);
    default:
      return state;
  }

}

export const TodoContext = createContext();



function App() {
  const idRef = useRef(3);
  // const [todos,setTodos] = useState(mockData);
  const [todos,dispatch] = useReducer(reducer,mockData);

  const onCreate =useCallback((content) => {
    dispatch({
      type:"CREATE",
      data : {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      }
    })
  },[])

  const onUpdate = useCallback((targetId) =>{
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  },[]);


  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      targetId : targetId
    })},[]);


   return (
  <div className="App">
  {/* <Exam/> */}
    <Header/>
    <TodoContext.Provider 
      value={{todos,onCreate,onUpdate,onDelete}}>
      <Editor/>
      <List/>
    </TodoContext.Provider>
  </div>
   )
}

export default App;

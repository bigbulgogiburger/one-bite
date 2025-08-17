import './App.css'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import { useReducer, useRef,createContext} from 'react'
import Home from './pages/Home.jsx'
import New from './pages/New.jsx'
import Diary from './pages/Diary.jsx'
import NotFound from './pages/NotFound.jsx'
import { getEmotionImage } from './util/get-emotion-image.js'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import Edit from './pages/Edit.jsx'


const mockData = [
  {
    id : 1,
    createdDate: new Date("2025-08-17").getTime(),
    emotionId: 1,
    content: "1번일기내용"
  },
  {
    id : 2,
    createdDate: new Date("2025-08-16").getTime(),
    emotionId: 2,
    content: "2번일기내용"
  },
  {
    id : 3,
    createdDate: new Date("2025-07-16").getTime(),
    emotionId: 3,
    content: "3번일기내용"
  }
]

function reducer(state,action) {
  switch(action.type){
    case "CREATE":
      return [action.data,...state];
    case "UPDATE":
      return state.map((item)=> 
        String(item.id) === String(action.data.id)? action.data : item);
    case "DELETE":
      return state.filter((item)=>
        String(item.id) !== String(action.id));
    default:
      return state
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

// 1. "/" 모든 일기를 조회하는 home페이지
// 2. "/new"  새로운 일기를 작성하는 new 페이지
// 3. "/diary" 1번 일기를 조회하는 dairy 페이지"
function App() {

  const [data, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate,emotionId,content) =>{
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current,
        createdDate,
        emotionId,
        content}
    })

  }
  // 일기 수정
  const onUpdate = (id,createdDate,emotionId,content) =>{
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createdDate,
        emotionId,
        content}
    })

  }

  // 일기 삭제

  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id
    })
  }


  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }
// link component를 사용해야 내부 페이지의 데이터가 새로 고침이 안됨(a href는 새로고침됨)
  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onDelete,onUpdate}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App

import './TodoItem.css'
import { memo, useContext } from 'react';
import { TodoContext } from '../App';
const TodoItem = ({id, isDone, content, date}) => {

    const {onUpdate,onDelete} = useContext(TodoContext);
    

    const onChangeCheckBox = ()=>{
        onUpdate(id);
    }

    const onClickDeleteButton = () =>{
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onChangeCheckBox} checked={isDone} type="checkbox" />
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default memo(TodoItem);
// // 고차 컴포넌트(HOC)
// export default memo(TodoItem,(prev,next)=>{
//     //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> 안바뀜(리렌더링 안함)
//     // F -> 바뀜(리렌더링 함)
//     if(prev.id !== next.id) return false;
//     if(prev.isDone !== next.isDone) return false;
//     if(prev.content !== next.content) return false;
//     if(prev.date !== next.date) return false;
//     return true;
// });
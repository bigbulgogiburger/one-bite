import './List.css'
import TodoItem from './TodoItem'
import { useState,useMemo,useContext } from 'react'
import { TodoContext } from '../App'
const List =  () => {

    const {todos} = useContext(TodoContext);
    const [search,setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFileteredData =  ()=>{
        if(search==='') {
            return todos;

        }
        return todos.filter(
            (todo)=>todo.content.toLowerCase()
            .includes(search.toLocaleLowerCase())
        );
    
    }

    const filteredTodos = getFileteredData();


    // const getAnalyzedData = () =>{
    //     console.log("getAnalyzedData");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=>todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // };
    const {totalCount,doneCount,notDoneCount} = useMemo(()=>{
        console.log("getAnalyzedData");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    // 의존성 배열 : deps


    // const {totalCount,doneCount,notDoneCount} = getAnalyzedData();
    return (
        <div className='List'>
            <h4>ToDo List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>
            <input value={search} onChange={onChangeSearch} 
            placeholder="검색어를 입력하세요" />
            <div className='todos_wrapper'>
                {filteredTodos.map((todo)=>{
                    return (
                        <TodoItem key ={todo.id} {...todo}/>)
                        }
                    )
                }
                    </div>
                </div>


    )
}
export default List
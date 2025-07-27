import { useState,useRef } from 'react';


const Register = () => {

const [input, setInput] = useState({
     name : '',
     birth : '',
     country : '',
     bio : '' 
})

const countRef = useRef(1);
const inputRef = useRef()

const onSubmit = () => {
  if(input.name === ""){
    // 이름을 입력하는 DOM 요소 포커스
    inputRef.current.focus();    

  }
}

const onChange = (e) => {
  countRef.current++;
  console.log(countRef.current);
  setInput({...input, [e.target.name] : e.target.value});
}

  return (
    <div>
      <div>
        <input ref={inputRef} name ="name" value={input.name} placeholder={'이름'} onChange={onChange} />
      </div>
      <div>
        <input name = "birth" value={input.birth} type="date" onChange={onChange} />
      </div>
      <div>
        <select name = "country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name='bio' onChange={onChange} value={input.bio}/>      
    </div>
    <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;

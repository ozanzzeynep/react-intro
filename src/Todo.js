import { useState } from "react";

function Todo () {

    const [todo, setTodo] = useState('');
    const [todoList,setTodolist] = useState([]);

    const onChange = (event) =>{
            setTodo(event.target.value);
    }

    const handleAdd = (event) => {
        if(todo.trim() !== ''){
            //Girilen değeri listeye ekliyor.
            setTodolist([...todoList,todo]);
            //Input alanını temizlıyor.
            setTodo('') 
        }
    }
    const remove = (activity) => {
        let newList = todoList.filter(todo => todo !== activity);
        setTodolist(newList);
        
    }
    return (

        <div className="center">
            <input value={todo} onChange={onChange} ></input>
            <button onClick={handleAdd} type="button">Ekle</button>

            <ul>
                {todoList.map(todo => <li key = {todo}>{todo} <button onClick= {()=> {remove(todo);}}>X</button></li>)}
            </ul>
        </div>
    );
}

export default Todo;
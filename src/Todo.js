import { useState } from "react";

const Todo =() =>{

    const [todo, setTodo] = useState('');
    const [todoList,setTodolist] = useState([]);

    const handleChange = (event) =>{
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
    return (

        <div className="center">
            <input type="text" id="todo" name="todo" onChange={handleChange} value={todo}></input>
            <button onClick={handleAdd} type="button">Ekle</button>

            <ul>
                {todoList.map((data,index) => (
                    <li key = {index}>{data}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
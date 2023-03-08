import { useState, useEffect } from 'react';
import Todo from './todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      let response = await fetch("https://json-api-main-chi.vercel.app/api/todo/list");
      let data = await response.json();
      setTodos(data.todos);
    };
    getTodos();
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

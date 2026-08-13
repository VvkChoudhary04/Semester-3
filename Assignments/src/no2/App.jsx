import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>API Practice - Filter & Delete</h1>

      <h2>Q1. Show Completed Todos Only</h2>
      {todos
        .filter(todo => todo.completed)
        .map(todo => (
          <p key={todo.id}>
            {todo.id} - {todo.title}
          </p>
        ))}

      <hr />

      <h2>Q2. Show First 10 Todos</h2>
      {todos.slice(0, 10).map(todo => (
        <p key={todo.id}>
          {todo.id} - {todo.title}
        </p>
      ))}

      <hr />

      <h2>Q3. Filter Todos by User ID</h2>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      {userId &&
        todos
          .filter(todo => todo.userId === userId)
          .map(todo => (
            <p key={todo.id}>
              {todo.id} - {todo.title}
            </p>
          ))}

      <hr />

      <h2>Q4. Delete a Todo</h2>

      {todos.slice(0, 10).map(todo => (
        <div key={todo.id}>
          <span>
            {todo.id} - {todo.title}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}

      <hr />

      <h2>Q5. Search + Delete Together</h2>

      <input
        type="text"
        placeholder="Search todo"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredTodos.map(todo => (
        <div key={todo.id}>
          <span>
            {todo.id} - {todo.title}
          </span>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
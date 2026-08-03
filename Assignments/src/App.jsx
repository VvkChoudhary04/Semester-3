// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   return (
//     <div>
//       <h1>Completed Todos</h1>

//       {todos
//         .filter((todo) => todo.completed)
//         .map((todo) => (
//           <p key={todo.id}>
//             {todo.id} - {todo.title}
//           </p>
//         ))}
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   return (
//     <div>
//       <h1>First 10 Todos</h1>

//       {todos.slice(0, 10).map((todo) => (
//         <p key={todo.id}>
//           {todo.id} - {todo.title}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setFiltered(data);
      });
  }, []);

  function filterUser(id) {
    setFiltered(todos.filter((todo) => todo.userId === id));
  }

  return (
    <div>
      <h1>Filter by User</h1>

      <button onClick={() => filterUser(1)}>User 1</button>
      <button onClick={() => filterUser(2)}>User 2</button>
      <button onClick={() => filterUser(3)}>User 3</button>
      <button onClick={() => setFiltered(todos)}>All</button>

      {filtered.map((todo) => (
        <p key={todo.id}>
          {todo.id} - {todo.title}
        </p>
      ))}
    </div>
  );
}

export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   function deleteTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <div>
//       <h1>Delete Todo</h1>

//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <p>
//             {todo.id} - {todo.title}
//           </p>

//           <button onClick={() => deleteTodo(todo.id)}>
//             Delete
//           </button>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setTodos(data));
//   }, []);

//   function deleteTodo(id) {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   const filteredTodos = todos.filter((todo) =>
//     todo.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Search & Delete Todo</h1>

//       <input
//         type="text"
//         placeholder="Search Todo"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredTodos.map((todo) => (
//         <div key={todo.id}>
//           <p>
//             {todo.id} - {todo.title}
//           </p>

//           <button onClick={() => deleteTodo(todo.id)}>
//             Delete
//           </button>

//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
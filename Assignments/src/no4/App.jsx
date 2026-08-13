import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";const students = [
  { id: 1, name: "Vivek", marks: 85 },
  { id: 2, name: "Rahul", marks: 78 },
  { id: 3, name: "Aman", marks: 92 },
  { id: 4, name: "Rohit", marks: 88 }
];

function StudentList() {
  return (
    <div>
      <h2>Student List</h2>

      {students.map(student => (
        <p key={student.id}>
          <Link to={`/student/${student.id}`}>{student.name}</Link>
        </p>
      ))}
    </div>
  );
}

// function StudentDetails() {
//   const { id } = useParams();

//   const student = students.find(student => student.id == id);

//   if (!student) {
//     return <h2>Student not found</h2>;
//   }

//   return (
//     <div>
//       <h2>{student.name}</h2>
//       <p>Marks: {student.marks}</p>
//     </div>
//   );
// }
function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find(student => student.id == id);

  if (!student) {
    return (
      <div>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/student")}>
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Marks: {student.marks}</p>

      <button onClick={() => navigate("/student")}>
        Back to List
      </button>
    </div>
  );
}
function Child({ message }) {
  return <h2>{message}</h2>;
}

function Middle({ message }) {
  return <Child message={message} />;
}
const MessageContext = createContext();

function ContextChild() {
  const message = useContext(MessageContext);

  return <h2>{message}</h2>;
}

function ContextMiddle() {
  return <ContextChild />;
}
const ThemeContext = createContext();

function ThemeChild() {
  const theme = useContext(ThemeContext);

  return <h2>Current theme: {theme}</h2>;
}

function App() {
  return (
    <BrowserRouter>
  <Middle message="Welcome to React" />

  <MessageContext.Provider value="Hello from Context">
    <ContextMiddle />
  </MessageContext.Provider>
  <ThemeContext.Provider value="dark">
  <ThemeChild />
</ThemeContext.Provider>
  <nav>
        <Link to="/student">Students</Link>
      </nav>

      <Routes>
        <Route path="/student" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
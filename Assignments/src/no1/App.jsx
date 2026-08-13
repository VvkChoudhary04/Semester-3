import { useState } from "react";

function Q1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Q1. Counter with Limit</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)} disabled={count === 10}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decrease
      </button>
    </div>
  );
}

function StudentCard({ name, rollNo, course }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function Q2() {
  return (
    <div>
      <h2>Q2. Reusable Student Card</h2>

      <StudentCard
        name="Vivek"
        rollNo="101"
        course="CSE AI & ML"
      />

      <StudentCard
        name="Rahul"
        rollNo="102"
        course="CSE"
      />

      <StudentCard
        name="Aman"
        rollNo="103"
        course="CSE AI & ML"
      />
    </div>
  );
}

function Display({ count }) {
  return <h3>Count: {count}</h3>;
}

function Controls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count => count - 1)}>
        Decrease
      </button>
    </div>
  );
}

function Q3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Q3. Counter Split into Two Components</h2>
      <Display count={count} />
      <Controls setCount={setCount} />
    </div>
  );
}

function Badge({ count }) {
  return <h3>Total: {count}</h3>;
}

function Q4() {
  const [tasks, setTasks] = useState(["Task1", "Task2"]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <h2>Q4. Todo Count Badge</h2>

      <input
        value={task}
        onChange={e => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <Badge count={tasks.length} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function LikeCount({ likes }) {
  return <h3>Likes: {likes}</h3>;
}

function LikeButton({ handleLike }) {
  return <button onClick={handleLike}>Like</button>;
}

function Q5() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Q5. Like Button with Count Display</h2>
      <LikeCount likes={likes} />
      <LikeButton handleLike={() => setLikes(likes + 1)} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Practice Set</h1>

      <Q1 />
      <hr />

      <Q2 />
      <hr />

      <Q3 />
      <hr />

      <Q4 />
      <hr />

      <Q5 />
    </div>
  );
}

export default App;
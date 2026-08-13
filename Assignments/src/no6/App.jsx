import { useState, useMemo, useCallback, memo, useEffect } from "react";

const ProfileCard = memo(function ProfileCard({ title, city }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{city}</p>
    </div>
  );
});

const Child = memo(function Child({ handleClick }) {
  return <button onClick={handleClick}>Child Button</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [other, setOther] = useState(0);
  const [step, setStep] = useState(1);
  const [name, setName] = useState(
    localStorage.getItem("name") || ""
  );

  const names = ["Vivek", "Rahul", "Aman", "Rohit", "Karan"];

  const filteredNames = useMemo(() => {
    return names.filter(name =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleClick = useCallback(() => {
    console.log("Count:", count);
  }, [count]);

  const increase = useCallback(() => {
    setCount(count + step);
  }, [count, step]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <ProfileCard title="Vivek" city="Pune" />

      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>

      <h2>Step: {step}</h2>
      <button onClick={() => setStep(step + 1)}>
        Change Step
      </button>

      <h2>Search Names</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />

      <ul>
        {filteredNames.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <h2>Other: {other}</h2>
      <button onClick={() => setOther(other + 1)}>
        Other
      </button>

      <Child handleClick={handleClick} />

      <h2>Remember My Name</h2>

      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello {name}</p>
    </div>
  );
}

export default App;
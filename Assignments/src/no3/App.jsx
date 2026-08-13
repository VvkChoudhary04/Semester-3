import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Us Page</h2>;
}

function Services() {
  return <h2>Services Page</h2>;
}

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <p>My projects and work.</p>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>My resume and skills.</p>
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <p>Cheesy and delicious pizza.</p>
    </div>
  );
}

function Burger() {
  return (
    <div>
      <h2>Burger</h2>
      <p>Fresh and tasty burger.</p>
    </div>
  );
}

function Drinks() {
  return (
    <div>
      <h2>Drinks</h2>
      <p>Cold and refreshing drinks.</p>
    </div>
  );
}

function CompanyHome() {
  return (
    <div>
      <h2>Company Home</h2>
      <p>Welcome to our company.</p>
    </div>
  );
}

function CompanyAbout() {
  return (
    <div>
      <h2>About Us</h2>
      <p>We provide quality services.</p>
    </div>
  );
}

function CompanyContact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Name: ABC Company</p>
      <p>Email: abc@gmail.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}
        <Link to="/services">Services</Link>{" "}
        <Link to="/projects">Projects</Link>{" "}
        <Link to="/resume">Resume</Link>{" "}
        <Link to="/pizza">Pizza</Link>{" "}
        <Link to="/burger">Burger</Link>{" "}
        <Link to="/drinks">Drinks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
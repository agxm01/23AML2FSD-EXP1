import { useState } from "react";
import "./App.css";

function App() {
  // State to store form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      <h1>Simple Form SPA</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="output">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </div>
  );
}

export default App;


import React, { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="container">
      {login ? (
        <div>
          <h1>Dashboard</h1>
          <h2>Welcome to the Dashboard</h2>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <input type="text" placeholder="Username" />
          <br /><br />
          <input type="password" placeholder="Password" />
          <br /><br />
          <button onClick={() => setLogin(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;


import React from "react";

var isLoggedIn = true;

function loginPage() {
  if(isLoggedIn){
    return <h1 className="container">Welcome User!</h1>
  } else {
    return (
      <div className="container">
        <h1>Hello</h1>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

function App() {
  return <div className="App">{loginPage()}</div>
}

export default App;

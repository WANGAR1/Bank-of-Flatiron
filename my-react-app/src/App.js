import React from "react";
import "./App.css"
import AccountContainer from "./AccountContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div >
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function incress() {
    console.log("y");
    //   setCount(count + 1);
  }
  function decrees() {
    console.log("n");
    //setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onclick={incress()}>+</button>
      <button onclick={decrees()}>-</button>
    </div>
  );
}

export default App;

import React from "react";
function App() {
  return (
    <div style={{ display: "flex", flexWrap:"wrap", gap: "1rem" }}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}


function Card() {
  return (
    <div style={{width: "200px", height: "300px", backgroundColor: "red", border: "1px solid black"}}>
      <img src="https://picsum.photos/200/300" alt="card" />
      <h1>Hello React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        doloribus modi dolore magnam excepturi amet fugit totam placeat
        laboriosam maiores
      </p>
    </div>
  );
}
export default App;
import React, { useState, useEffect } from "react";
function Main() {
  const [count, setCount] = useState(0);

  const handleChange1 = () => {
    setCount(count + 1);
  }
  const handleChange2 = () => {
    setCount(count - 1);
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h2>My name is {count}</h2>
      <button onClick={handleChange1}>Increament</button>
      <button onClick={handleChange2}>Decreament</button>



      <hr />
    </div>
  );
}
export default Main;

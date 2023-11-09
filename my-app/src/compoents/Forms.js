import { useState } from "react";

function Forms() {
    const [inputValue, setInputValue] = useState('');
    const [emotion, setEmotion] = useState("hi");
    const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
   }
  return <div>
    <form>
        <input type="text" value ={inputValue} onChange={handleChange}></input>
        <h2>Input Value: {inputValue}</h2>
    </form>
    <h3>My Name is {emotion}</h3>
        <button onClick={() => setEmotion("Happy")}>Happen</button>
  </div>;
}
export default Forms;

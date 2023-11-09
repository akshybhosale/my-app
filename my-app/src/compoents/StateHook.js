import { useState } from "react";

export default function StateHook() {
  const [emotion, setEmotion] = useState("hi");
  return (
    <div>
      <h3>Hook</h3>
      <div>
        <h2>Current emotion is {emotion}</h2>
        <button onClick={() => setEmotion("Happy")}>Happen</button>
        <button onClick={() => setEmotion("Frustrated")}>Frustrated</button>
        <button onClick={() => setEmotion("Enthusiastic")}>Enthusiastic</button>
      </div>
    </div>
  );
}

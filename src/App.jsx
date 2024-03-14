import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState([]);
  const showName = () => {
    if (input === "") return;
    setShow([...show, input]);
    console.log("Show", show);
    console.log("input", input);
    setInput("");
  };
  const removeName = () => {
    const newShow = [...show];
    newShow.pop();
    setShow(newShow);
    setInput("");
  };
  return (
    <>
      <div>
        <input
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={showName}>Show Name</button>
        <button onClick={removeName}>Delete Name</button>

        <ul>
          {show.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default App;

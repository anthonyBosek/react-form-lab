import { useState } from "react";

const App = () => {
  const [inputValues, setInputValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleClick = (e) => {
    console.log("handleClick", inputValues);
  };

  return (
    <>
      <h1>App Component</h1>

      <div>
        <label>Enter Email:</label>
        <input
          type="text"
          name="email" // key
          value={inputValues.email || ""} // value
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Enter Password:</label>
        <input
          type="text"
          name="password"
          value={inputValues.password || ""}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default App;

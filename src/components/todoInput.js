import { useState } from "react";

export default function TodoInput({ createTodoItem }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Mohon tambahkan todo");
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <from onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="tambah todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>create</button>
    </from>
  );
}

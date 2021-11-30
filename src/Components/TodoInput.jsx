import { useState } from "react";

function TodoInput({ onTaskCreate }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleAdd = () => onTaskCreate(text);
  return (
    <div>
      <input onChange={handleChange} type="text" value={text} />
      <input onClick={handleAdd} type="button" value="ADD" />
    </div>
  );
}
export default TodoInput;

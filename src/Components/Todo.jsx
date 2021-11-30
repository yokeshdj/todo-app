import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
function Todo() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "DEFAULT",
      status: false
    }
  ]);
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleToggle = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updatedTodo);
  };
  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todo.length + 1
    };
    setTodo([...todo, payload]);
    console.log(todo);
  };
  return (
    <>
      <TodoInput onTaskCreate={handleTaskCreate} />
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          status={item.status}
          id={item.id}
        />
      ))}
    </>
  );
}
export default Todo;

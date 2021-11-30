function TodoItem({ title, status, id, handleDelete, handleToggle }) {
  return (
    <div>
      <div>
        <span>{`${title}-${status?"DONE":"NOT DONE"}`}</span>
        <input onClick={() => handleDelete(id)} type="button" value="X" />
        <input onClick={() => handleToggle(id)} type="button" value="Toggle" />
      </div>
    </div>
  );
}
export default TodoItem;

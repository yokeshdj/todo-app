function TodoItem({ title, status, id }) {
  return (
    <div>
      <div>
        <span>{`${title}-${status}`}</span>
      </div>
    </div>
  );
}
export default TodoItem;

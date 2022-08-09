import React from "react";

export default function todoItem({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) {
  return (
    <div className="d-flex gap-5">
      <div>
        <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
          {item.todo}
        </li>
      </div>
      <div className="d-flex gap-5">
        <button onClick={() => completeTodoItem(index)}>Complete</button>
        <button onClick={() => updateTodoItem(index)}>Update</button>
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  );
}

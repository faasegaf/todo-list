import React from "react";
import { Form } from "react-bootstrap";
import "../style/todoItem.css";

import Delete from "../pages/delete.png";
import Edit from "../pages/edit.png";

export default function todoItem({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) {
  return (
    <div>
      <div className="d-flex justify-content-between my-3 px-3">
        <div className="d-flex justify-content-start gap-3">
          <Form.Check type="checkbox" onClick={() => completeTodoItem(index)} />
          <p
            style={{
              textDecoration: item.complete ? "line-through" : "",
            }}
          >
            {item.todo}
          </p>
        </div>
        <div style={{ cursor: "pointer" }} className="d-flex gap-2">
          <img
            src={Edit}
            className="icone"
            alt="Edit"
            onClick={() => updateTodoItem(index)}
          />
          <img
            src={Delete}
            className="icone"
            alt="Delete"
            onClick={() => deleteTodoItem(index)}
          />
        </div>
      </div>
    </div>
  );
}

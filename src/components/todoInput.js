import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import swal from "sweetalert";

export default function TodoInput({ createTodoItem }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Mohon tambahkan todo");
    }
    createTodoItem(value);
    setValue("");
    swal("Good job!", "Todo sudah berhasil ditambahkan pada list", "success", {
      buttons: false,
    });
  };
  return (
    <div className="body-border border rounded flex-wrap ">
      <Form>
        <Form.Group className="my-3" controlId="formBasicText">
          <Form.Control
            type="text"
            value={value}
            placeholder="tambah todo"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleSubmit}>Create</Button>
      </Form>
    </div>
  );
}

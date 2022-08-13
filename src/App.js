import { useState } from "react";
import swal from "sweetalert";

import "./App.css";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const arr = newTodoItems.splice(index, 1);
    swal({
      title: `Yakin ${arr[0].todo} akan dihappus?`,
      text: `Setelah dihapus, Anda tidak akan dapat memulihkan todo ini`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setTodoItems(newTodoItems);
        swal("todo anda berhasil dihapus", {
          icon: "success",
        });
      } else {
        swal("Todo anda aman!");
      }
    });
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <div className="backgrondBlock">
      <div className="p-5">
        <div className="text-center">
          <h1>Todo List</h1>
        </div>
        <div>
          <TodoInput createTodoItem={createTodoItem} />

          {todoItems.map((item, index) => (
            <div className="body-border border rounded flex-wrap">
              <TodoItem
                key={index}
                index={index}
                item={item}
                deleteTodoItem={deleteTodoItem}
                completeTodoItem={completeTodoItem}
                updateTodoItem={updateTodoItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

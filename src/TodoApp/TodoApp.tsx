import React from "react";

type Todo = {
  id: string;
  name: string;
  done: boolean;
};

const startTodos: Array<Todo> = [
  { id: "clicker", name: "use clicker app on on App.tsx", done: false },
  { id: "shop_list", name: "we need to fix shop list", done: false },
  { id: "solve_todo", name: "allow this app to mark todos", done: false },
];

export const TodoApp = () => {
  const [todos, setTodos] = React.useState(startTodos);

  function makeSolveTodoHandler(updatedTodo: Todo) {
    return function () {
      // here we should update a todo
      setTodos(
        todos.map((currentTodo) => {
          if (currentTodo.id === updatedTodo.id) {
            // this is coping currentTodo and override name
            return {
              ...currentTodo,
              name: "maybe this is not the solution",
            };
          }
          return currentTodo;
        })
      );
    };
  }

  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <ul>
          {todos.map(function (todo) {
            return (
              <li>
                <label>
                  <span>{todo.name}</span>
                  <input
                    type="checkbox"
                    onChange={makeSolveTodoHandler(todo)}
                    checked={todo.done}
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

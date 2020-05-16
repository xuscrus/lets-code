import React from "react";

export const TaskList = (props: { todos: Array<string> }) => {
  return (
    <div>
      <pre>{["tasks", "------------", ...props.todos].join("\n")}</pre>
    </div>
  );
};

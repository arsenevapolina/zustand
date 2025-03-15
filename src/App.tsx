import { Card, Checkbox, Input } from "antd";
import "./App.css";
import { useTodoStore } from "./modal/todoStore";
import { useState } from "react";

function App() {
  const { addTodo, changeIsComplete, todos } = useTodoStore();
  const [value, setValue] = useState<string>("");

  return (
    <div className="wrapper">
      <Input
        style={{ width: 300 }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo(value);
            setValue("");
          }
        }}
      />
      {todos.map((todo, index) => (
        <Card className="card">
          <Checkbox
            checked={todo.isComplete}
            onChange={() => changeIsComplete(index)}
          />
          <span>{todo.title}</span>
        </Card>
      ))}
    </div>
  );
}

export default App;

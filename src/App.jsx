import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Editor from "./components/Editor/Editor";
import List from "./components/List/List";

function App() {
  const [todos, setTodo] = useState([]);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodo([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodo(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;

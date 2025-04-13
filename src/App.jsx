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

  const onDelete = (targetId) => {
    setTodo(
      todos.filter((todo) => {
        todo.id !== targetId; //삭제되어야 하는 id의 아이템들을 제외한 나머지만 filter(조건을 만족하는 요소만 남겨 새 배열 반환 )
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

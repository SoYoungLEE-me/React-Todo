import React from "react";
import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onsubmit(); //엔터를 누를 때 이벤트 호출
    }
  };

  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        placeholder="새로운 Todo..."
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};

export default Editor;

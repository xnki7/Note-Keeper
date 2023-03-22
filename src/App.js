import "./App.css";
import NoteBox from "./NoteBox";
import { useState } from "react";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [noteList, setNoteList] = useState([]);

  function handleArray() {
    setNoteList((old) => {
      return [...old, note];
    });
  }

  function deleteAll() {
    setNoteList(() => {
      return[];
    });
  }

  function deleteNote(id) {
    setNoteList((old) => {
      return old.filter((curele, index)=>{
        return index !== id;
      });
    });
  }

  function inputHandle(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "content") {
      setNote(() => {
        return {
          title: note.title,
          content: value,
        };
      });
    } else if (name === "title") {
      setNote(() => {
        return {
          title: value,
          content: note.content,
        };
      });
    }
  }

  return (
    <div className="App">
      <div className="inputArea">
        <input
          type="text"
          placeholder="Enter Title here"
          name="title"
          onChange={inputHandle}
          value={note.title}
        />
        <input
          type="text"
          placeholder="Enter note here"
          name="content"
          onChange={inputHandle}
          value={note.content}
        />
        <button onClick={handleArray}>Add Note</button>
      </div>
      <br />
      <br />
      <div className="notes">
        {noteList.map((curele, index) => {
          return (
            <NoteBox
              title={curele.title}
              content={curele.content}
              id={index}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <button onClick={deleteAll}>DELETE ALL</button>
    </div>
  );
}

export default App;

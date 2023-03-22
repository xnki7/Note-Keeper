import React from 'react'
import "./NoteBox.css"

function NoteBox(props) {

  function deleteTask(){
    props.onDelete(props.id);
  }  

  return (
    <div className='NoteBox'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default NoteBox
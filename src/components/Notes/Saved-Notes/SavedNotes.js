import TinyDelete from "../../Buttons/TinyDelete";
import TinyEdit from "../../Buttons/TinyEdit";
import { useContext, useState } from 'react';
import { produce } from "immer";

import "./savedNotes.css";

import { NotesContext } from "../../App/NotesContext";

export default function SavedNotes() {

  const {setData} = useContext(NotesContext);

  // const [currentId, setCurrentId] = useState('')

  const handleRemove = (id) => {
    let n = id.target.attributes.id.value;

    function search(idKey, array){
      for (var i=0; i < array.length; i++) {
          if (array[i].id === idKey) {
              return array[i];
          }
      }
  }
  const result = data.indexOf(search(n,data))

    const nextState = produce(data, (draftState) => {
        draftState.splice(result,1);
    });

    if (typeof window !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(nextState));
    }
    setData(nextState);
}

  const {data} = useContext(NotesContext)
  // const {handleRemove} = useContext(NotesContext)
function change(classe,color){
  let d = document.querySelector(`#${classe}`);
  d.style.backgroundColor=`${color}`
}
  // let newData = data.reverse();
  
const [open, setOpen] = useState(false)

const toggleState = () => {
  if(open) setOpen(false);
  if(!open) setOpen(true)
}

// let n;
// let j;
// const handleTouch= (id) =>{
//    n = id.target.attributes.id.value;

//     function search(idKey, array){
//       for (var i=0; i < array.length; i++) {
//           if (array[i].id === idKey) {
//               return array[i];
//           }
//       }
//   }
//   j = data.indexOf(search(n,data))

//   toggleState()
// }
const handleEdit = (id) => {
  let n = id.target.attributes.id.value;

  function search(idKey, array){
    for (var i=0; i < array.length; i++) {
        if (array[i].id === idKey) {
            return array[i];
        }
    }
}
const result = data.indexOf(search(n,data))

  document.querySelector("#noteText").value = data[result].message;

  handleRemove(id);
}


  return (
    <div className="savedNotesContainer">
      <h2>Saved Notes</h2>
      {data.length === 0 ? (
        <h3 className="empty">
          <i>No saved messages</i>
        </h3>
      ) : (
        data.map((note) => (
          <div className="savedMessage" id = {note.id} onClick={toggleState}>
            <div className="peekMessage">
              <h3 className="timeBoxSaved">{note.time}</h3>
              <h3 className="savedComments">
                {/* <i>{(note.message.length >= 15)?(note.message.substr(0, 15) + "..."):note.message}</i>
                <i>{note.message}</i> */}
                {(!open)?(<i>{(note.message.length >= 15)?(note.message.substr(0, 15) + "..."):note.message}</i>):
                <i>{note.message}</i>}
              </h3>
            </div>
            {/* <TinyEdit /> */}
            <div className="tinyEditContainer" >
              <button className="tinyEdit" onClick={handleEdit} id={note.id}>
                <i class="fas fa-edit" id={note.id}></i>
              </button>
            </div>
            {/* <TinyDelete id = {note.id} /> */}
            <div className="tinyDeleteContainer">
              <button className="tinyDelete" onClick={handleRemove} id ={note.id}>
                <i className="fas fa-trash-alt" id={note.id}></i>
               </button>
            </div>
            
          </div>
        ))
      )}
    </div>
  );
}

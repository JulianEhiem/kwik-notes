import "./newNoteHead.css";
import SaveButton from "../../../Buttons/SaveButton";
// import NewButton from "../../../Buttons/NewButton";
import DeleteButton from "../../../Buttons/DeleteButton";
import { useContext } from 'react';
import { NotesContext } from "../../../App/NotesContext";

export default function NewNoteHead() {
  
  const {dateTime} = useContext(NotesContext);
  
  return (
    <div className="newNotesHeadContainer">
  <h3 id = "createdAt"className="time-box">{dateTime}</h3>
      <SaveButton />
      {/* <NewButton /> */}
      <DeleteButton />
    </div>
  );
}

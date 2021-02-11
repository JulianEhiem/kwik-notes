import "./newNotes.css";
import NewNoteHead from "./New-Note-Head/NewNoteHead";
import NewNoteBody from "./New-Note-Body/NewNoteBody";
import SavedNotes from "../Saved-Notes/SavedNotes";


export default function NewNotes() {
  return (
    <div className="notesContainer">
      <div className="newNotesContainer">
        <NewNoteHead />
        <NewNoteBody />
     </div>
      <SavedNotes/>
    </div>
  );
}

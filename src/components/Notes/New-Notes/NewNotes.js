import "./newNotes.css";
import NewNoteHead from "./New-Note-Head/NewNoteHead";
import NewNoteBody from "./New-Note-Body/NewNoteBody";

export default function NewNotes() {
  return (
    <div className="newNotesContainer">
      <NewNoteHead />
      <NewNoteBody />
    </div>
  );
}

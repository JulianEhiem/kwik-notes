import "./newNotes.css";
import NewNoteHead from "./New-Note-Head/NewNoteHead";
import NewNoteBody from "./New-Note-Body/NewNoteBody";
// import SavedNotes from "../Saved-Notes/SavedNotes";


export default function NewNotes(props) {
  let onsave2 = props.onsave1
  return (
      <div className="newNotesContainer">
        <NewNoteHead onsave3 = {onsave2}/>
        <NewNoteBody />
     </div>
  );
}

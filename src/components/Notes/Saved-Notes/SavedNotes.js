import TinyDelete from "../../Buttons/TinyDelete";
import TinyEdit from "../../Buttons/TinyEdit";
import "./savedNotes.css";

export default function SavedNotes(props) {

  let ondelete2 = props.ondelete1;
  return (
    
    <div className="savedNotesContainer">
      <h2>Saved Notes</h2>

      {props.data.length === 0 ? (
        <h3>
          <i>No saved messages</i>
        </h3>
      ) : (
        props.data.map((note) => (
          <div className="savedMessage">
            <div className="peekMessage">
              <h3 className="timeBoxSaved">{note.time}</h3>
              <h3 className="savedComments">
                <i>{(note.message.length >= 15)?(note.message.substr(0, 15) + "..."):note.message}</i>
              </h3>
            </div>
            <TinyEdit />
            <TinyDelete ondelete3 = {ondelete2} />
          </div>
        ))
      )}
    </div>
  );
}

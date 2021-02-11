import "./newNoteHead.css";
import SaveButton from "../../../Buttons/SaveButton";
import DeleteButton from "../../../Buttons/DeleteButton";

export default function NewNoteHead() {
  return (
    <div className="newNotesHeadContainer">
      <h3 className="time-box">02-13-2021 &nbsp; 7:15am</h3>
      <SaveButton />
      <DeleteButton />
    </div>
  );
}

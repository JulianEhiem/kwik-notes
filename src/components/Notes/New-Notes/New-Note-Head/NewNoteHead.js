import "./newNoteHead.css";
import SaveButton from "../../../Buttons/SaveButton";
import DeleteButton from "../../../Buttons/DeleteButton";

export default function NewNoteHead(props) {
  let onsave4 = props.onsave3;
  return (
    <div className="newNotesHeadContainer">
      <h3 className="time-box">02-13-2021 &nbsp; 7:15am</h3>
      <SaveButton onsave5 = {onsave4}/>
      <DeleteButton />
    </div>
  );
}

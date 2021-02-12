import "./newNoteHead.css";
import SaveButton from "../../../Buttons/SaveButton";
import DeleteButton from "../../../Buttons/DeleteButton";

export default function NewNoteHead(props) {
  let onsave4 = props.onsave3;
  let today = new Date;
  // let date = today.getMonth()+ 1 + '-' + today.getDate()+ "-" + today.getFullYear()
  let date = today.toLocaleDateString()
  // let time = (today.getHours() > 12 ?today.getHours() - 12:today.getHours())+':'+today.getMinutes() + (today.getHours < 13? "am":"pm");
  let time = today.toLocaleTimeString()
  let dateTime = date + ' - ' + time;
  return (
    <div className="newNotesHeadContainer">
  <h3 id = "createdAt"className="time-box">{dateTime}</h3>
      <SaveButton onsave5 = {onsave4}/>
      <DeleteButton />
    </div>
  );
}

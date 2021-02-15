import "./newBtn.css";
import { NotesContext } from "../App/NotesContext";
import { useContext } from "react";


export default function NewButton() {

  const {handleDelete} = useContext(NotesContext);

  return (
    <div className="newBtnContainer">
      <button className="newBtn" onClick={handleDelete}>
        New Note
      </button>
    </div>
  );
}

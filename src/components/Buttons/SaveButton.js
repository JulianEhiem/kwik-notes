import { useContext } from "react";
import { NotesContext } from "../App/NotesContext";
import "./saveBtn.css";
// import NotesContext from "../App/NotesContext";

export default function SaveButton() {
const { handleClick } = useContext(NotesContext)

  return (
    <div className="saveBtnContainer">
      <button className="saveBtn" onClick={handleClick} >
        Save <i className="fas fa-save"></i>
      </button>
    </div>
  );
}

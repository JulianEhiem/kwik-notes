import { useContext } from "react";
import { NotesContext } from "../App/NotesContext";
import "./saveBtn.css";
// import { produce } from "immer";

export default function SaveButton() {

  const {handleSave} = useContext(NotesContext);

  return (
    <div className="saveBtnContainer">
      <button className="saveBtn" onClick ={handleSave} >
        Save <i className="fas fa-save"></i>
      </button>
    </div>
  );
}

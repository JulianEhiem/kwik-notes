import "./deleteBtn.css";
import { useContext } from "react";
import { NotesContext } from "../App/NotesContext";

export default function DeleteButton() {

  const {handleDelete} = useContext(NotesContext);

  return (
    <div className="deleteBtnContainer">
      <button className="deleteBtn" onClick={handleDelete}>
        Delete <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

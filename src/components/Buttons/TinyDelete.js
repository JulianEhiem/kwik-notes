import "./tinyDelete.css";
import { useContext } from "react";
import { NotesContext } from "../App/NotesContext";

export default function TinyDelete() {

  const {handleRemove} = useContext(NotesContext);
  
  return (
    <div className="tinyDeleteContainer">
      <button className="tinyDelete" onClick={handleRemove} >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

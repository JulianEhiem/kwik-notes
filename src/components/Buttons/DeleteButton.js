import "./deleteBtn.css";

export default function DeleteButton() {
  return (
    <div className="deleteBtnContainer">
      <button className="deleteBtn">
        Delete <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

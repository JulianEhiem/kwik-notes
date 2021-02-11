import "./newBtn.css";

export default function NewButton() {
  return (
    <div className="newBtnContainer">
      <button className="newBtn">
        New Note &nbsp;<i className="far fa-plus-square"></i>
      </button>
    </div>
  );
}

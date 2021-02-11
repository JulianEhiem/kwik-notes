import "./saveBtn.css";

export default function SaveButton(props) {
let onsave6 = props.onsave5

  return (
    <div className="saveBtnContainer">
      <button className="saveBtn" onClick={onsave6}>
        Save <i className="fas fa-save"></i>
      </button>
    </div>
  );
}

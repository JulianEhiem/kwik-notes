import "./tinyDelete.css";

export default function TinyDelete(props) {
  let ondelete4 = props.ondelete3;
  return (
    <div className="tinyDeleteContainer">
      <button className="tinyDelete" onClick = {ondelete4}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

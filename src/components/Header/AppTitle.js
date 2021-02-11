import "./appTitle.css";
import NewButton from "../Buttons/NewButton";

export default function AppTitle() {
  return (
    <div className="titleContainer">
      <h1 className="title">Kwik-Notes</h1>
      <NewButton />
    </div>
  );
}

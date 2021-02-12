import "./appTitle.css";
import NewButton from "../Buttons/NewButton";
import logo from "../../crumpled.png"

export default function AppTitle() {
  return (
    <div className="titleContainer">
      <h1 className="title">KWIKNOTE</h1>
      {/* <img src={logo} alt="kwiknote logo"/> */}
      <NewButton />
    </div>
  );
}

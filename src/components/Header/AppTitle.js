import "./appTitle.css";
import NewButton from "../Buttons/NewButton";
import logo from "../../crumpled.png"

export default function AppTitle() {
  return (
    <div className="titleContainer">
      {/* <div className="overlay"></div> */}
      <h1 className="title">
        <span className="overlay"></span> <span className="appName">KWIKNOTE</span></h1>
      {/* <img src={logo} alt="kwiknote logo"/> */}
      {/* <NewButton /> */}
    </div>
  );
}

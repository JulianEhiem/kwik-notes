import "./app.css";
import AppTitle from "../Header/AppTitle";
import NewNotes from "../Notes/New-Notes/NewNotes";
import SavedNotes from "../Notes/Saved-Notes/SavedNotes";

export default function App() {
  return (
    <div className="appContainer">
      <AppTitle />
      <NewNotes />
      <SavedNotes />
    </div>
  );
}

import "./app.css";
import AppTitle from "../Header/AppTitle";
import NewNotes from "../Notes/New-Notes/NewNotes";
import SavedNotes from "../Notes/Saved-Notes/SavedNotes";
import NotesContextProvider from "./NotesContext";

function App() {
  return (
    <div className="superContainer">
      <div className="appContainer">
        <NotesContextProvider>
          <AppTitle />
          <NewNotes />
          <SavedNotes/>
        </NotesContextProvider>
      </div>  
    </div>
  );
}


export default App;
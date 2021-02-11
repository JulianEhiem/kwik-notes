import "./app.css";
import AppTitle from "../Header/AppTitle";
import NewNotes from "../Notes/New-Notes/NewNotes";
import SavedNotes from "../Notes/Saved-Notes/SavedNotes";
import { useState } from "react";

function App() {
  const initialData = [
    { time: "02-01-2021  7:15am", message: "First message" },
    { time: "02-05-2021  6:55am", message: "Second message" },
    { time: "02-12-2021  1:12pm", message: "Third message" },
    { time: "02-13-2021  7:45pm", message: "Fourth message" },
    { time: "02-13-2021  11:19am", message: "Fifth message" },
    { time: "02-19-2021  2:23pm", message: "Sixth message" }]
// const initialData = [];
  const [data, setData] = useState(initialData);

  return (
    <div className="appContainer">
      <AppTitle />
      <NewNotes />
      <SavedNotes data = {data}/>
    </div>
  );
}


export default App;
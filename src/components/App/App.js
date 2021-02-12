import "./app.css";
import AppTitle from "../Header/AppTitle";
import NewNotes from "../Notes/New-Notes/NewNotes";
import SavedNotes from "../Notes/Saved-Notes/SavedNotes";
import { useState } from "react";
import { produce } from "immer";

function App() {
  // const initialData = [
  //   { time: "02-01-2021  7:15am", message: "First message" },
  //   { time: "02-05-2021  6:55am", message: "Second message" },
  //   { time: "02-12-2021  1:12pm", message: "Third message" },
  //   { time: "02-13-2021  7:45pm", message: "Fourth message" },
  //   { time: "02-13-2021  11:19am", message: "Fifth message" },
  //   { time: "02-19-2021  2:23pm", message: "Sixth message" }]
const initialData = [];
  const [data, setData] = useState(initialData);
  let today = new Date();
  // let date = today.getMonth()+ 1 + '-' + today.getDate()+ "-" + today.getFullYear()
  let date = today.toLocaleDateString()
  // let time = (today.getHours() > 12 ?today.getHours() - 12:today.getHours())+':'+today.getMinutes() + (today.getHours >= 12? "am":"pm");
  let time = today.toLocaleTimeString();
  let dateTime = date + ' ' + time;

  const handleClick = () => {
    const message = document.querySelector("#noteText").value.trim();
    // const time = document.querySelector("#createdAt").value;
    const time = dateTime;
    if (message) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ time , message});
      });
      document.querySelector("#noteText").value = "";

      setData(nextState);
    }
  
  };
  const displayTouch = (e) => {
    console.log(e)
  }

  const handleDelete = () => {
    // alert("you clicked me!")
    // console.log(data.findIndex(this.message))
    let e = document.querySelector(".tinyDelete");
    console.log(displayTouch(e.target.class))
  }


  return (
    <div className="appContainer">
      <AppTitle />
      <NewNotes onsave1 = {handleClick} />
      <SavedNotes data = {data} ondelete1 = {handleDelete}/>
    </div>
  );
}


export default App;
// const { useState, createContext } = require("react")

import { useState, createContext } from 'react';
import { produce } from "immer";

// import { produce } from "immer";
// import { ProxyTypeSet } from 'immer/dist/internal';

export const NotesContext = createContext();


const NotesContextProvider = (props) =>{
    const initialData = [];
//   const initialData = [
//     { time: "02-01-2021  7:15am", message: "First message" },
//     { time: "02-05-2021  6:55am", message: "Second message" },
//     { time: "02-12-2021  1:12pm", message: "Third message" },
//     { time: "02-13-2021  7:45pm", message: "Fourth message" },
//     { time: "02-13-2021  11:19am", message: "Fifth message" },
//     { time: "02-19-2021  2:23pm", message: "Sixth message" }]

    const [data, setData] = useState(initialData);
    let today = new Date();
    // let date = today.getMonth()+ 1 + '-' + today.getDate()+ "-" + today.getFullYear()
    let date = today.toLocaleDateString()
    // let time = (today.getHours() > 12 ?today.getHours() - 12:today.getHours())+':'+today.getMinutes() + (today.getHours >= 12? "am":"pm");
    let time = today.toLocaleTimeString();
    let dateTime = date + ' ' + time;
    let preId = data.length;

    const handleSave = () => {
            const message = document.querySelector("#noteText").value.trim();
            // const time = document.querySelector("#createdAt").value;
            const time = dateTime;
            const id = preId;
        if (message) {
        const nextState = produce(data, (draftState) => {
            draftState.push({ id, time , message});
        });
        document.querySelector("#noteText").value = "";

        setData(nextState);
        }
    }

    const handleDelete = () => {
         document.querySelector("#noteText").value = "";
    }

    const handleRemove = () => {
        const nextState = produce(data, (draftState) => {
            draftState.pop();
        });

        setData(nextState);

    }
        



    return (
        <NotesContext.Provider value ={{data, setData, handleSave, handleDelete, handleRemove, dateTime}}>
            {props.children}
        </NotesContext.Provider>
    )
}





export default NotesContextProvider;
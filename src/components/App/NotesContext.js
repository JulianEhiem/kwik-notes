// const { useState, createContext } = require("react")

import { useState, createContext } from 'react';
import { produce } from "immer";

// import { produce } from "immer";
// import { ProxyTypeSet } from 'immer/dist/internal';

export const NotesContext = createContext();


const NotesContextProvider = (props) =>{
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
  
    }

    return (
        <NotesContext.Provider value ={data}>
            {props.children}
        </NotesContext.Provider>
    )
}





export default NotesContextProvider;
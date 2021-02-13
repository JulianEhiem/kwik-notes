// const { useState, createContext } = require("react")

import { useState, createContext } from 'react';

import { produce } from "immer";
// import { ProxyTypeSet } from 'immer/dist/internal';

export const NotesContext = createContext();


const NotesContextProvider = (props) =>{
    const initialData = [];
//   const initialData = [
//     {id:'n1', time: "02-01-2021  7:15am", message: "First message" },
//     {id:'n2', time: "02-05-2021  6:55am", message: "Second message" },
//     {id:'n3', time: "02-12-2021  1:12pm", message: "Third message" },
//     {id:'n4', time: "02-13-2021  7:45pm", message: "Fourth message" },
//     {id:'n5', time: "02-13-2021  11:19am", message: "Fifth message" },
//     {id:'n6', time: "02-19-2021  2:23pm", message: "Sixth message" }]

    const [data, setData] = useState(initialData);
    let today = new Date();
    // let date = today.getMonth()+ 1 + '-' + today.getDate()+ "-" + today.getFullYear()
    let date = today.toLocaleDateString()
    // let time = (today.getHours() > 12 ?today.getHours() - 12:today.getHours())+':'+today.getMinutes() + (today.getHours >= 12? "am":"pm");
    let time = today.toLocaleTimeString();
    let dateTime = date + ' ' + time;
    // let preId = data.length;

    const handleSave = () => {
            const message = document.querySelector("#noteText").value.trim();
            // const time = document.querySelector("#createdAt").value;
            const time = dateTime;
            const num = Math.floor(Math.floor(Math.random() * 10000))
            const id = `note${num}`;
        if (message) {
        const nextState = produce(data, (draftState) => {
            draftState.unshift({ id, time , message});
        });
        document.querySelector("#noteText").value = "";

        setData(nextState);
        }
    }

    const handleDelete = () => {
         document.querySelector("#noteText").value = "";
    }

    // const handleRemove = (id) => {
    //     // const nextState = produce(data, (draftState) => {
    //     //     draftState.splice(id,1);
    //     // });
    //     // console.log(id.target.attributes[1].nodeValue)
    //     console.log(id)
    //     // setData(nextState);
    //     // const findId = (e)=>alert(e.target.id)
    //     // findId()
    // }
        



    return (
        <NotesContext.Provider value ={{data, setData, handleSave,  handleDelete, dateTime}}>
            {props.children}
        </NotesContext.Provider>
    )
}





export default NotesContextProvider;
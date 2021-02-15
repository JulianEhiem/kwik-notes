import { useState, createContext, useEffect } from 'react';
import { produce } from "immer";
export const NotesContext = createContext();

const NotesContextProvider = (props) =>{
    const initialData = [];
    const [data, setData] = useState(initialData);

    let today = new Date();
    let date = today.toLocaleDateString()
    let time = today.toLocaleTimeString();
    let dateTime = date + ' ' + time;

    const handleSave = () => {
      const message = document.querySelector("#noteText").value.trim();
      const time = dateTime;
      // Generate random id per note
      const num = Math.floor(Math.random() * 10000)
      const id = `note${num}`;

        if (message) {
        const nextState = produce(data, (draftState) => {
            draftState.unshift({ id, time , message});
        });
        document.querySelector("#noteText").value = "";

        if (typeof window !== 'undefined') {
            localStorage.setItem('data', JSON.stringify(nextState));
          }
        setData(nextState);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const getData = localStorage.getItem('data');
          if (getData !== '' && getData !== null) {
            return setData(JSON.parse(getData));
          }
          return setData([]);
        }
      }, 0)

    const handleDelete = () => {
         document.querySelector("#noteText").value = "";
    }

    return (
        <NotesContext.Provider value ={{data, setData, handleSave,  handleDelete, dateTime}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider;
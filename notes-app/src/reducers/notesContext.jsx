import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "./notesReducer";  

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const initialState = {
        title: "",
        text: "",   
        notes: [],
        archived: [],
        isPinned: false,
        isImportant: false,
        isDeleted: false, 
    }

    const [{title,text,notes, archived}, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{title,text,notes,archived, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    );
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
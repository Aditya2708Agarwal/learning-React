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
        deleted: [], 
    }

    const [{title,text,notes, archived, deleted}, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{title,text,notes,archived,deleted, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    );
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
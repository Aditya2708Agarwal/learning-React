import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "./notesReducer";  
import { useEffect } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
    const initialState = {
        title: "",
        text: "",   
        notes: [],
        archived: [],
        isPinned: false,
        deleted: [], 
    };

    const getInitialState = () => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        const savedArchived = JSON.parse(localStorage.getItem("archived")) || [];
        const savedDeleted = JSON.parse(localStorage.getItem("deleted")) || [];
        
        return {
            ...initialState,
            notes: savedNotes,
            archived: savedArchived,
            deleted: savedDeleted
        };
    } 

    const [{title,text,notes, archived, deleted}, notesDispatch] = useReducer(notesReducer, getInitialState());

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));   
        localStorage.setItem("archived", JSON.stringify(archived));
        localStorage.setItem("deleted", JSON.stringify(deleted));
    }, [notes, archived, deleted]);

    return (
        <NotesContext.Provider value={{title,text,notes,archived,deleted, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    );
}

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
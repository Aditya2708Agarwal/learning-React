import { v4 as uuid } from 'uuid';

export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case "TITLE":
            return {
                ...state,
                title: payload
            }
        case "TEXT":
            return {
                ...state,
                text: payload
            }

        case "ADD_NOTE":
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        id: uuid(),
                        title: state.title,
                        text: state.text,
                        isPinned: false,
                    }
                ],
            }

        case "CLEAR_INPUT":
            return {
                ...state,
                title: "",
                text: ""
            }

        case "PIN_NOTE":
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: true } : note
                )
            }

        case "UNPIN_NOTE":
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: false } : note
                )
            }

        case "ARCHIVE_NOTE":
            return {
                ...state,
                archived: [
                    ...state.archived,
                    state.notes.find(note => note.id === payload.id)
                ],
                notes: state.notes.filter(note => note.id !== payload.id)
            }

        case "UNARCHIVE_NOTE":
            return {
                ...state,

                archived: state.archived.filter(note => note.id !== payload.id),
                notes: [
                    ...state.notes,
                    state.archived.find(note => note.id === payload.id)
                ]
            }


        case "DELETE_NOTE": {
            const noteInNotes = state.notes.find(note => note.id === payload.id);
            const noteInArchive = state.archived.find(note => note.id === payload.id);
            const noteToDelete = noteInNotes || noteInArchive;

            return {
                ...state,
                deleted: [
                    ...state.deleted,
                    noteToDelete
                ],
                notes: state.notes.filter(note => note.id !== payload.id),
                archived: state.archived.filter(note => note.id !== payload.id)
            };
        }

        case 'RESTORE_NOTE':
            return {
                ...state,
                deleted: state.deleted.filter(note => note.id !== payload.id),
                notes: [
                    ...state.notes,
                    state.deleted.find(note => note.id === payload.id)
                ]
            }

        case "DELETE_FOREVER":
            return {
                ...state,
                deleted: state.deleted.filter(note => note.id !== payload.id)
            }

        default:
            return state;
    }
}


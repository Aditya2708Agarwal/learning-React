import {v4 as uuid} from 'uuid';

export const notesReducer = (state, {type, payload}) => {
    switch (type){
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
                        isImportant: false,
                        isArchived: false,
                        isDeleted: false
                    }
                ],
            }

        case "CLEAR_INPUT":
            return {
                ...state,
                title: "",
                text: ""
            }     
        default:
            return state;
    }
}


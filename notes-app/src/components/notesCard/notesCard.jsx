import { useNotes } from "../../reducers/notesContext"
import { useLocation } from "react-router-dom";

export const NotesCard = ({ id, title, text, isPinned }) => {

    const { notesDispatch, archived= [], deleted=[] } = useNotes();
    const location = useLocation();

    const onPinClick = () => {
        !isPinned ? notesDispatch({
            type: "PIN_NOTE",
            payload: { id }
        }) : notesDispatch({
            type: "UNPIN_NOTE",
            payload: { id }
        })
    }

    const onArchiveClick = () => {
        !isArchived ? notesDispatch({
            type: "ARCHIVE_NOTE",
            payload: { id }
        }) : notesDispatch({
            type: "UNARCHIVE_NOTE",
            payload: { id }
        })
    }

    const onDeleteClick = () => {
        !isDeleted ? notesDispatch({
            type: "DELETE_NOTE",
            payload: { id }
        }) : notesDispatch({
            type: "RESTORE_NOTE",
            payload: { id }
        })
    }


    const findNoteINDeleted = (deleted, id) => {
        return deleted?.some(note => note.id === id) || false;
    }

    const isDeleted = findNoteINDeleted(deleted, id);

    const findNoteINArchive = (archived, id) => {
        return archived?.some(note => note.id === id) || false;
    }

    const isArchived = findNoteINArchive(archived, id);

    const isInBin = location.pathname === '/bin';
    const isInArchive = location.pathname === '/archive';


    return (
        <div key={id} className="border p-3 rounded-lg mb-2 bg-slate-800 w-[350px] min-h-[175px]">
            <div className="flex items-center justify-between mb-1 border-b-2 py-2  border-sky-400">
                <h3 className="text-2xl text-sky-400 font-bold">{title}</h3>
                {
                    !isArchived && !isInBin && !isInArchive && <span onClick={onPinClick} className={isPinned ? "material-icons text-sky-400 cursor-pointer " : "material-icons-outlined text-sky-400 cursor-pointer"}>
                        push_pin
                    </span>
                }
            </div>
            <div className="flex items-start justify-between min-h-2/3 text-xl py-1">
                <p className="mr-1 text-sky-100 whitespace-pre-wrap">{text}</p>
                <div className="text-sky-400 flex gap-2">
                    <button>
                        {
                            !isInBin && ( <span onClick={onArchiveClick} className={isArchived ? "material-icons cursor-pointer " : "material-icons-outlined cursor-pointer "}>
                                archive
                            </span>)
                        }
                        <span onClick={onDeleteClick} className={isDeleted ? "material-icons cursor-pointer " : "material-icons-outlined cursor-pointer "}>
                            {
                                isInBin ? "restore_from_trash" : "delete"
                            }
                        </span>
                    </button>
                </div>
            </div>

        </div>)
}
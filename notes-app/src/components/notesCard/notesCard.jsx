import { useNotes } from "../../reducers/notesContext"

export const NotesCard = ({id, title, text, isPinned }) => {

    const { notesDispatch } = useNotes();

    const onPinClick = () =>{
        !isPinned ? notesDispatch({
            type: "PIN_NOTE",
            payload: {id}
        }) : notesDispatch({
            type: "UNPIN_NOTE",
            payload: {id}
        })
    }

    const onArchiveClick = (id) => {
        notesDispatch({
            type: "ARCHIVE_NOTE",
            payload: {id}
        })
    }

    return (
    <div key={id} className="border p-3 rounded-lg mb-2 bg-slate-800 w-[350px] min-h-[175px]">
        <div className="flex items-center justify-between mb-1 border-b-2 py-2  border-sky-400">
            <h3 className="text-2xl text-sky-400 font-bold">{title}</h3>
            <span onClick={() => onPinClick(id)} className={isPinned ? "material-icons text-sky-400 cursor-pointer ": "material-icons-outlined text-sky-400 cursor-pointer"}>
                push_pin
            </span>
        </div>
        <div className="flex items-start justify-between min-h-2/3 text-xl py-1">
            <p className="mr-1 text-sky-100">{text}</p>
            <div className="text-sky-400">
                <button>    
                    <span onClick={() => onArchiveClick(id)} className="material-icons-outlined cursor-pointer ">
                        archive
                    </span>
                    <span className="material-icons-outlined cursor-pointer ">
                        delete
                    </span>
                </button>
            </div>
        </div>

    </div>)
}